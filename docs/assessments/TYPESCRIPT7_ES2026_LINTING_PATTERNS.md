# TypeScript 7 & ES2026 Linting Opportunities - Tactical Reference

**Date**: August 23, 2026  
**Purpose**: Map concrete language features to linting rules oxc could implement  
**Scope**: Latest TypeScript and ECMAScript capabilities that enable new linting

---

## Part 1: TypeScript 7 Type System Enhancements

### 1.1 Discriminated Unions & Exhaustiveness Checking

#### Feature: Improved Discriminated Union Narrowing
```typescript
// TypeScript 7: Better union narrowing
type Result<T> =
  | { status: "success"; data: T }
  | { status: "loading" }
  | { status: "error"; error: Error };

function handle<T>(result: Result<T>) {
  if (result.status === "success") {
    // TS 7: Knows T is available here
    return result.data;
  }
  // ... other cases
}
```

#### Linting Rules
```
✓ rule-name: "exhaustive-discriminated-unions"
  Description: Ensure all discriminated union cases are handled
  Triggers when:
    - if/switch statement doesn't cover all union variants
    - No default case when needed
  Examples:
    - Missing case "loading" in switch
    - if (result.status === "success") { } else { } // Missing other types
  Fixable: Sometimes (can add missing cases)

✓ rule-name: "unreachable-discriminated-case"
  Description: Warn about unreachable cases in discriminated union handling
  Triggers when:
    - Cases ordered so some can never execute
    - Impossible type combinations
  Examples:
    - if (result.status === "success" && result.status === "error") { }

✓ rule-name: "discriminated-union-unnecessary-type-check"
  Description: Simplify redundant type checks
  Triggers when:
    - Already narrowed by earlier check
  Examples:
    - if (status === "success") {
        if (data !== null) { } // data is never null in success state
      }
  Fixable: Yes (remove redundant check)
```

#### Code Examples for Linter

```typescript
// BAD - missing case
type Response = 
  | { type: "ok"; data: string }
  | { type: "error"; error: Error }
  | { type: "pending" };

function handle(res: Response) {
  if (res.type === "ok") return res.data;
  if (res.type === "error") throw res.error;
  // Missing case: "pending" <- WARN: exhaustive-discriminated-unions
}

// GOOD - covers all cases
function handle(res: Response) {
  switch (res.type) {
    case "ok": return res.data;
    case "error": throw res.error;
    case "pending": return null;
  }
}

// BAD - unreachable condition
if (res.status === "success") {
  if (res.status === "error") { } // <- WARN: unreachable-discriminated-case
}
```

---

### 1.2 Type Narrowing with Control Flow

#### Feature: Context-Aware Type Narrowing
```typescript
// TS 7: Understands narrowing through control flow
function process(value: string | null | undefined) {
  if (value) {
    // TS 7 knows value is string here
    console.log(value.length);
  } else {
    // value is null | undefined
  }
}
```

#### Linting Rules
```
✓ rule-name: "unreachable-code-after-type-guard"
  Description: Flag code unreachable due to type narrowing
  Triggers when:
    - Code after type-impossible condition
  Examples:
    - if (x !== null) { ... }
    - if (typeof x === "string") { }
    - if (Array.isArray(x)) { }
    - After that, referencing null | undefined -> WARN

✓ rule-name: "redundant-type-guard"
  Description: Flag redundant type narrowing
  Triggers when:
    - Type already narrowed in parent scope
  Examples:
    - if (x !== null) {
        if (x !== null) { } // <- redundant check
      }
  Fixable: Yes (remove redundant check)

✓ rule-name: "unreachable-type-combination"
  Description: Warn about impossible type combinations in checks
  Triggers when:
    - Condition checks for type impossible after narrowing
  Examples:
    - if (x !== null && x === null) { } // impossible
    - if (typeof x === "string" && typeof x === "number") { } // impossible
  Fixable: Yes (remove impossible branch)
```

---

### 1.3 Type Parameter Constraints (const Type Parameters)

#### Feature: const Type Parameters (TS 5.0+, refined in 7)
```typescript
// TS 7: Preserve literal types with const
function identity<const T>(value: T): T {
  return value;
}

const x = identity("hello"); // x: "hello" (not string)
const y = identity(42);      // y: 42 (not number)

// Without const:
function identity2<T>(value: T): T { return value; }
const z = identity2("hello"); // z: string (widened!)
```

#### Linting Rules
```
✓ rule-name: "should-use-const-type-parameter"
  Description: Suggest const type parameter when preserving literals
  Triggers when:
    - Generic function doesn't need widened types
    - Function returns generic value unchanged
  Examples:
    - function get<T>(key: string): T { ... }
      Should consider: function get<const T>(key: string): T { ... }
  Severity: Suggestion (not error)

✓ rule-name: "type-parameter-unnecessarily-wide"
  Description: Flag unnecessary type widening
  Triggers when:
    - const not used but should be
    - Type narrowing lost
  Examples:
    - function memoize<T>(fn: () => T): () => T { }
      Should use const to preserve literal return types
  Fixable: Yes (add const)

✓ rule-name: "generic-constraint-violation"
  Description: Detect type parameter constraint violations
  Triggers when:
    - Argument violates constraint
  Examples:
    - function take<T extends { id: number }>(obj: T) { }
    - take({ id: "123" }); // <- Error: string not assignable to number
  Severity: Error
```

---

### 1.4 Satisfies Operator for Type Checking

#### Feature: satisfies Operator (TS 4.9+, standard in 7)
```typescript
// satisfies: Check against type without narrowing
type Config = {
  database: "mysql" | "postgres";
  port: number;
};

const config = {
  database: "mysql",
  port: 5432
} satisfies Config; // ✓ Checked but config.database is still literal "mysql"

// Without satisfies:
const config2: Config = { ... }; // Narrowed to Config union
// config2.database is now "mysql" | "postgres"
```

#### Linting Rules
```
✓ rule-name: "prefer-satisfies-over-assertion"
  Description: Recommend satisfies instead of type assertion
  Triggers when:
    - Using 'as Type' or ': Type' where satisfies would be better
  Examples:
    const config = {...} as Config; // <- WARN: use satisfies instead
    const config: Config = {...};   // <- WARN: use satisfies if literal types matter
  Fixable: Yes (replace with satisfies)

✓ rule-name: "satisfies-unused"
  Description: Warn about satisfies without type checking
  Triggers when:
    - satisfies used but doesn't actually validate
  Examples:
    const x = 5 satisfies string; // ✓ Caught by TS, but linter could warn earlier

✓ rule-name: "type-assertion-vs-satisfies"
  Description: Detect situations where satisfies is safer than assertion
  Triggers when:
    - As assertion might hide errors
  Examples:
    const config = {...} as Record<string, unknown>;
    Better: const config = {...} satisfies Record<string, unknown>;
```

---

### 1.5 Enhanced Decorator Support (Stage 3)

#### Feature: Decorators (TS 5.0+, Stage 3 for JS)
```typescript
// Decorators now stable in TS 7
function logged(
  target: any,
  propertyKey?: string,
  descriptor?: PropertyDescriptor
) {
  console.log(`Called ${propertyKey}`);
}

class API {
  @logged
  async fetchData() { }
  
  @logged
  @cached
  processData() { } // Stacked decorators
}
```

#### Linting Rules
```
✓ rule-name: "decorator-ordering"
  Description: Enforce consistent decorator ordering
  Triggers when:
    - Decorators in non-standard order
  Examples:
    @validation // <- Best: input validation first
    @caching    // <- Then caching
    @logging    // <- Then logging
    async method() { }
    
    But seen:
    @logging    // <- Wrong order
    @caching
    @validation
  Fixable: Yes (reorder)

✓ rule-name: "decorator-conflict"
  Description: Warn about conflicting decorators
  Triggers when:
    - Decorators that don't play well together
  Examples:
    @readonly
    @writable   // <- Conflicting decorators
    
✓ rule-name: "invalid-decorator-target"
  Description: Ensure decorators target correct elements
  Triggers when:
    - Method decorator on property
    - Property decorator on method
  Examples:
    @MethodDecorator // <- Applied to property, wrong!
    property: string;
  Severity: Error

✓ rule-name: "undeclared-decorator-metadata"
  Description: Flag decorator metadata usage without proper setup
  Triggers when:
    - Using 'reflect-metadata' decorator but not imported
```

---

## Part 2: ES2026 & Beyond Language Features

### 2.1 Array Enhancements

#### Feature: Array.groupBy() and Array.fromAsync()

```javascript
// ES2024: Array.groupBy
const users = [
  { id: 1, role: "admin" },
  { id: 2, role: "user" },
  { id: 3, role: "admin" }
];

const grouped = Array.from(users).group((u) => u.role);
// Result: { admin: [...], user: [...] }

// ES2024: Array.fromAsync
const asyncIterable = async function*() {
  yield 1;
  yield 2;
};
const data = await Array.fromAsync(asyncIterable);

// ES2025: Array.prototype.with
const arr = [1, 2, 3];
const modified = arr.with(1, 99); // Returns [1, 99, 3], arr unchanged
```

#### Linting Rules
```
✓ rule-name: "recommend-array-group"
  Description: Suggest Array.groupBy over manual grouping
  Triggers when:
    - Manually grouping array into object
  Examples:
    const grouped = {};
    for (const item of items) {
      const key = item.type;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    }
    // <- WARN: Use Array.groupBy instead
  Fixable: Yes (suggest refactoring)

✓ rule-name: "recommend-array-from-async"
  Description: Suggest Array.fromAsync for async iteration
  Triggers when:
    - Manually iterating async iterable
  Examples:
    const results = [];
    for await (const item of asyncIterable) {
      results.push(item);
    }
    // <- WARN: Use Array.fromAsync instead
  Fixable: Yes (suggest refactoring)

✓ rule-name: "prefer-immutable-array-method"
  Description: Recommend Array.with() over mutating array
  Triggers when:
    - Mutating array with arr[i] = value
  Examples:
    const arr = [1, 2, 3];
    arr[1] = 99; // <- WARN: Use arr.with(1, 99) for immutability
  Fixable: Yes (suggest .with() alternative)

✓ rule-name: "inefficient-array-operations"
  Description: Flag inefficient array patterns
  Triggers when:
    - Repeated array searching
    - Array operations that could use built-ins
  Examples:
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) { /* found */ }
    }
    // <- WARN: Use arr.find() or arr.includes()
  Fixable: Yes (suggest built-in methods)
```

---

### 2.2 Record & Object Improvements

#### Feature: Object.freeze() & Record Immutability (ES2026 proposals)

```javascript
// Static typing with freezing
const config = Object.freeze({
  port: 3000,
  host: "localhost",
  debug: false
});

// Attempt to mutate
config.port = 8000; // TypeError: Cannot assign to read only property
config.debug = true; // TypeError

// ES2026 Records (proposal)
const immutableRecord = Record({
  x: 0,
  y: 0
});

const point = immutableRecord({ x: 10, y: 20 });
point.x = 30; // Error: Records are immutable
```

#### Linting Rules
```
✓ rule-name: "should-freeze-mutable-record"
  Description: Recommend Object.freeze for configuration objects
  Triggers when:
    - Object never reassigned but might be mutated
  Examples:
    const config = { port: 3000, host: "localhost" };
    // <- WARN: Consider Object.freeze(config) for safety
  Fixable: Yes (add Object.freeze)

✓ rule-name: "frozen-object-mutation-attempt"
  Description: Warn about attempts to mutate frozen objects
  Triggers when:
    - Assignment to property of frozen object
  Examples:
    const config = Object.freeze({ port: 3000 });
    config.port = 8000; // <- WARN: Can't mutate frozen object
  Severity: Error (runtime error)

✓ rule-name: "recommend-record-for-immutability"
  Description: Suggest Records (ES2026) for immutable data structures
  Triggers when:
    - Using Object.freeze for immutability
  Examples:
    const point = Object.freeze({ x: 0, y: 0 });
    // <- SUGGEST: Use Record({ x: 0, y: 0 }) when available
  Severity: Suggestion

✓ rule-name: "object-property-descriptor-safety"
  Description: Flag unsafe property descriptor patterns
  Triggers when:
    - Object.defineProperty with writable:true on config objects
```

---

### 2.3 Regular Expression Improvements

#### Feature: Named Capture Groups & Better RegExp

```javascript
// ES2018+: Named capture groups (now standard)
const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = dateRegex.exec("2026-08-23");
const { year, month, day } = match.groups;

// Pattern to optimize: Regex that could be simpler
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Better: /^[^\s@]+@[^\s@]+$/  (domain requires .)

// Catastrophic backtracking risk
const badRegex = /^(a+)+$/; // <- DANGER: exponential backtracking
```

#### Linting Rules
```
✓ rule-name: "recommend-named-capture-groups"
  Description: Suggest named capture groups over numbered groups
  Triggers when:
    - Numbered capture groups used (match[1], match[2])
  Examples:
    const regex = /(\d{4})-(\d{2})-(\d{2})/;
    const [, year, month, day] = regex.exec(date);
    // <- WARN: Use named groups instead: (?<year>...) etc.
  Fixable: Yes (suggest refactoring)

✓ rule-name: "catastrophic-backtracking-regex"
  Description: Detect regex patterns vulnerable to ReDoS attacks
  Triggers when:
    - Nested quantifiers: (a+)+ or (a*)*
    - Exponential patterns
  Examples:
    const regex = /^(a+)+$/; // <- ERROR: ReDoS vulnerable
    const regex2 = /^([a-z]+)*$/; // <- ERROR: ReDoS vulnerable
  Severity: Error (security)

✓ rule-name: "inefficient-regex-pattern"
  Description: Flag regex patterns that could be simplified
  Triggers when:
    - Over-complex patterns
    - Redundant alternations
  Examples:
    /([a-z]|[A-Z])/ // <- WARN: Use [a-zA-Z] instead
    /(foo|bar|baz|qux|quux)/ // <- WARN: Consider character class
  Fixable: Yes (suggest simplified pattern)

✓ rule-name: "regex-missing-flags"
  Description: Warn about commonly forgotten regex flags
  Triggers when:
    - Global search without 'g' flag
    - Case-insensitive patterns without 'i' flag
  Examples:
    const regex = /error/; // <- WARN: Did you forget 'g' flag?
    const regex2 = /[A-Z]/; // <- WARN: Consider 'i' flag for case-insensitivity
  Severity: Suggestion
```

---

### 2.4 Temporal API (Stage 3)

#### Feature: Temporal for Date/Time Handling (ES2026 proposal)

```javascript
// CURRENT: Date is error-prone
const date = new Date("2026-08-23");
date.setDate(date.getDate() + 1); // Mutation, timezone issues

// FUTURE: Temporal (Stage 3, likely ES2026)
const instant = Temporal.Now.instant();
const zdt = instant.toZonedDateTimeISO("America/New_York");

const date = Temporal.PlainDate.from("2026-08-23");
const tomorrow = date.add({ days: 1 }); // Immutable, no timezone issues
```

#### Linting Rules
```
✓ rule-name: "prefer-temporal-api"
  Description: Recommend Temporal API over Date
  Triggers when:
    - Using new Date() for logic
    - Date arithmetic
  Examples:
    const date = new Date();
    date.setDate(date.getDate() + 1); // <- WARN: Use Temporal.PlainDate instead
  Fixable: Yes (when Temporal available)
  Severity: Suggestion

✓ rule-name: "date-timezone-error-pattern"
  Description: Warn about Date timezone handling issues
  Triggers when:
    - Creating Date without timezone consideration
    - Comparing dates with different timezones
  Examples:
    const date = new Date("2026-08-23"); // <- WARN: Assumes UTC, could be wrong
    const local = new Date(); // <- WARN: Timezone issue potential
  Severity: Warning

✓ rule-name: "date-mutation-anti-pattern"
  Description: Flag Date mutation patterns
  Triggers when:
    - Using Date.setX() methods
    - Mutating date objects
  Examples:
    date.setDate(date.getDate() + 1); // <- WARN: Use immutable Temporal instead
  Fixable: Yes (suggest Temporal alternative)

✓ rule-name: "invalid-date-arithmetic"
  Description: Catch Date math errors
  Triggers when:
    - Manual millisecond calculation
    - Date comparison issues
  Examples:
    const time = 1000 * 60 * 60 * 24; // <- WARN: 1 day in ms, use Temporal
    if (date1 > date2) { } // <- WARN: Date comparison behavior varies
```

---

### 2.5 Pattern Matching & Destructuring

#### Feature: Advanced Destructuring (ES2025+)

```javascript
// ES2025: Rest in objects
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// rest = { c: 3, d: 4 }

// Nested destructuring
const { user: { name, age }, config: { debug } } = obj;

// Default values in destructuring
const { port = 3000, host = "localhost" } = process.env;

// Missed opportunities
const obj = { id: 1, name: "John", email: "john@example.com" };
const id = obj.id;      // <- Could destructure
const name = obj.name;
const email = obj.email;
```

#### Linting Rules
```
✓ rule-name: "recommend-destructuring"
  Description: Suggest destructuring over property access
  Triggers when:
    - Multiple property accesses from same object
  Examples:
    const obj = { id: 1, name: "John" };
    const id = obj.id;
    const name = obj.name;
    // <- WARN: Use destructuring instead
  Fixable: Yes
  
✓ rule-name: "recommend-rest-pattern"
  Description: Suggest rest parameters over manual collection
  Triggers when:
    - Manually collecting remaining properties
  Examples:
    const { a, ...others } = obj; // ✓ Good (TS rest)
    // vs
    const remaining = Object.entries(obj)
      .filter(([k]) => !["a"].includes(k))
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
    // <- WARN: Use rest pattern instead
  Fixable: Yes

✓ rule-name: "inefficient-destructuring"
  Description: Flag destructuring that could be optimized
  Triggers when:
    - Destructuring then not using some values
    - Destructuring then reassigning
  Examples:
    const { a, b, c } = obj;
    const value = a; // <- Why destructure b and c?
  Fixable: Yes (keep only used items)

✓ rule-name: "deep-destructuring-nesting"
  Description: Warn about overly nested destructuring
  Triggers when:
    - More than 3 levels deep
  Examples:
    const { a: { b: { c: { d: value } } } } = obj; // <- WARN: Too deep
  Severity: Suggestion
```

---

## Part 3: Summary Matrix

### Features By Linting Opportunity Count

| Feature | Category | New Rules | Difficulty |
|---------|----------|-----------|-----------|
| Discriminated Unions | Type Safety | 3-4 | Medium |
| Type Narrowing | Type Safety | 3-4 | Medium |
| const Type Parameters | Type Safety | 2-3 | Medium |
| satisfies Operator | Type Safety | 2-3 | Low |
| Decorators | Best Practices | 3-4 | Medium |
| Array Methods | Performance | 4-5 | Low |
| Object Freezing | Safety | 3-4 | Medium |
| RegExp Patterns | Security | 4-5 | Medium |
| Temporal API | Best Practices | 4-5 | Low |
| Destructuring | Best Practices | 4-5 | Low |
| **TOTAL** | **Multiple** | **~35-45 rules** | **Varies** |

### Implementation Priority (Quick Wins First)

**Phase 1 (High ROI, Low Effort)**:
1. Satisfies operator recommendations
2. Array method suggestions
3. Destructuring recommendations
4. Named capture groups
5. RegExp ReDoS detection

**Phase 2 (Medium ROI, Medium Effort)**:
1. Discriminated union exhaustiveness
2. Type narrowing analysis
3. const type parameters suggestions
4. Decorator ordering
5. Temporal API recommendations

**Phase 3 (High Value, Medium-High Effort)**:
1. Catastrophic backtracking detection
2. Date mutation patterns
3. Deep destructuring warnings
4. Pattern matching analysis

---

## Implementation Notes for oxc Team

### Integration Points Needed

1. **For Type Safety Rules**:
   - Leverage oxc_type_checker for type narrowing
   - Extend oxc_semantic for control flow
   - Use oxc_cfg for unreachable code detection

2. **For Array/Object Rules**:
   - String literal matching for method names
   - Pattern matching for common idioms
   - Relatively low complexity

3. **For RegExp Rules**:
   - RegExp parsing (already have parser)
   - Backtracking analysis (new)
   - Pattern validation (new)

4. **For Decorator Rules**:
   - Decorator AST visitor (new)
   - Metadata tracking
   - Configuration validation

### Test Coverage Strategy

Each rule should have fixtures for:
1. **Positive case** (should trigger)
2. **Negative case** (should not trigger)
3. **Edge case** (boundary conditions)
4. **Fixable case** (if applicable)

Example test structure:
```
tests/
├── discriminated_unions/
│   ├── missing_case.js       (should error)
│   ├── exhaustive_handle.js  (should pass)
│   ├── nested_unions.js      (edge case)
│   └── fix_missing_case.js   (fixable test)
├── array_groupby/
│   ├── manual_grouping.js    (should suggest)
│   ├── already_using.js      (should pass)
│   └── fix_manual.js         (fixable test)
```

---

## Conclusion

**TypeScript 7 and ES2026 open 35-45 new linting opportunities** that ESLint cannot implement:

1. **Type system features** (discriminated unions, satisfies, const type params)
2. **Modern APIs** (Array.groupBy, Array.fromAsync, Temporal)
3. **Safety patterns** (decorator ordering, immutability enforcement, ReDoS detection)
4. **Best practices** (idiomatic destructuring, recommended methods)

These rules **differentiate oxc from ESLint/Biome** and position it as the type-aware, modern JavaScript linter.

Implementing 10-15 of these rules in Year 1 would:
- ✅ Prove the concept
- ✅ Differentiate from competitors
- ✅ Drive ecosystem adoption
- ✅ Support the broader "comprehensive linting platform" vision

---

**Report Prepared**: August 23, 2026  
**Next Step**: Pick 5 high-ROI rules to implement in Phase 1 (discriminated unions, array methods, satisfies, destructuring, RegExp ReDoS)
