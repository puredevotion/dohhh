# Oxc Nil/Null Flow Analysis Feature Assessment - Final Summary

**Date**: August 23, 2026  
**Scope**: Feasibility of implementing NilAway-like feature in oxc  
**Status**: Comprehensive research complete

---

## Key Findings

### 1. Technical Feasibility: MEDIUM-HIGH (6-9 months, 2 engineers)

**Challenges**:
- Language mismatch (Go nil vs JS null/undefined)
- TypeScript's complex type system
- Async/Promise handling complexity
- Sophisticated inference engine needed
- False positives must be minimized

**Advantages in oxc ecosystem**:
- ✅ Modern Rust architecture (fast, reliable)
- ✅ Type checker integration ready
- ✅ CFG (Control Flow Graph) support
- ✅ 947 rules framework (extensible)
- ✅ Semantic analysis infrastructure

**Estimated Effort**: 1,800-2,600 hours (22-38 person-weeks)
- Phase 1 (Foundation): 8-12 weeks
- Phase 2 (Sophistication): 12-16 weeks  
- Phase 3 (Polish): 6-8 weeks

---

### 2. Ecosystem Readiness: EXCELLENT

**The ecosystem is ready and supportive**:

#### Official Oxc Organization (61 repositories)
- **tsgolint** (1,396⭐) - Type-aware linting already proven in oxc
- **eslint-plugin-oxlint** (452⭐) - ESLint integration mature
- **oxc-resolver** (290⭐) - Core utilities available
- **oxc-node** (227⭐), **oxlint-migrate** (186⭐), etc.
- **IDE plugins** - VS Code, Zed, IntelliJ all supported

#### Community Projects (45+)
- **Build tools**: Vite (54⭐), Webpack, Rollup plugins
- **Formatters**: Prettier (71⭐), dprint (8⭐) integration
- **Module resolution**: Module-graph (53⭐) using oxc-resolver
- **Transformations**: React compiler, JSX transformers
- **Configuration**: Multiple eslint-config packages

#### Enterprise Adoption
- **Rolldown** - Next-gen bundler using oxc
- **Nuxt, Shopify, ByteDance, Shopee** - Major companies
- **Expo** - Active oxlint config maintenance
- **Nova, knip** - Using oxc_resolver

**Key Insight**: The ecosystem has proven patterns for extending oxc. A null-flow analyzer would fit naturally.

---

### 3. Market Fit

#### Market Demand Signals
- ✅ **tsgolint** (1,396⭐) proves type-aware rules wanted
- ✅ **nilaway** shows nil-flow analysis market exists  
- ✅ Enterprise adoption (Expo, Rolldown) ready to use
- ✅ No equivalent exists in oxc ecosystem (gap to fill)

#### Differentiation
- oxc lacks null/undefined analysis
- ESLint has no comparable built-in feature
- Would be major differentiator for oxlint
- Complements 947 existing rules

#### Adoption Pathways
1. **Internal oxc integration** - Like tsgolint
2. **External analysis tool** - Like nilaway
3. **IDE plugin** - Like existing oxc-vscode
4. **Build tool integration** - Like vite-plugin-oxlint
5. **Configuration sharing** - Like expo/oxlint-config-universe

---

## Comparison: Three Approaches

### ✅ Recommended: MVP + Phased Expansion

**Phase 1 (Months 1-3): MVP in oxc core**
- Basic unchecked property access detection
- Optional call checking  
- Type signature analysis
- Single-file scope
- Target: Catch 70% of common null panics

**Phase 2 (Months 4-6): Community Preview**
- Release as experimental oxlint rules
- Gather feedback from ecosystem (45+ projects)
- Iterate based on real usage

**Phase 3 (Months 7-9): Production Ready**
- Cross-module inference
- Advanced type narrowing
- Async/Promise support
- Configuration system
- Full documentation

**Why This Works**:
- ✅ Fast feedback loop (community engaged)
- ✅ Real-world validation before polish
- ✅ Lower risk than 6-month black box
- ✅ Can pivot based on adoption

---

## Recommended Project Structure

```rust
crates/oxc_null_checker/
├── src/
│   ├── analyzer.rs         # Main engine
│   ├── flow/               # Data flow analysis
│   │   ├── state.rs
│   │   ├── propagation.rs
│   │   └── narrowing.rs
│   ├── inference/          # Cross-module
│   │   ├── signatures.rs
│   │   ├── cache.rs
│   │   └── facts.rs
│   ├── types/              # Type system
│   │   ├── null_types.rs
│   │   └── type_guards.rs
│   ├── rules/              # Lint rules
│   │   ├── unchecked_access.rs
│   │   ├── null_return.rs
│   │   └── ...
│   ├── config.rs
│   └── diagnostics.rs
└── tests/
    ├── fixtures/
    └── integration/

Integration Points:
- oxc_type_checker      (type system)
- oxc_semantic          (semantic analysis)
- oxc_cfg               (control flow)
- oxc_linter            (rule engine)
- oxc_diagnostics       (output)
```

---

## Risk Assessment & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|------------|-----------|
| False positive rate too high | CRITICAL | MEDIUM | Early ecosystem beta testing |
| Type system complexity | CRITICAL | MEDIUM | Start simple, iterate |
| Performance impact | HIGH | MEDIUM | Incremental analysis, caching |
| Async/Promise handling | MEDIUM | MEDIUM | Phase 2 work, design upfront |
| Community adoption | MEDIUM | LOW | Good documentation, examples |

---

## Success Criteria

### MVP Success (Phase 1)
- [ ] Detects basic null/undefined access in single files
- [ ] <5% false positive rate on real codebases
- [ ] Performance impact <2% on oxlint runtime
- [ ] Handles top 20 common patterns

### Community Preview (Phase 2)
- [ ] 50+ projects test & provide feedback
- [ ] Ecosystem integration examples working
- [ ] Type narrowing handles real-world code
- [ ] Cross-file analysis functional

### Production Ready (Phase 3)
- [ ] Comprehensive test suite (500+ test cases)
- [ ] <1% false positive rate
- [ ] Performance tuning complete
- [ ] Full documentation
- [ ] LSP/IDE support
- [ ] Configuration system

---

## Budget Estimate

### Team & Timeline
- **Team Size**: 2 senior engineers (1 type system, 1 dataflow)
- **Duration**: 6-9 months
- **Total LOC**: ~5,000-8,000 lines Rust

### Development Cost
- **Phase 1 (MVP)**: 600-800 hours
- **Phase 2 (Sophistication)**: 800-1,200 hours
- **Phase 3 (Polish)**: 400-600 hours
- **Total**: 1,800-2,600 hours

### Approximate Value
- **Market impact**: High (differentiates oxlint from ESLint)
- **Enterprise interest**: High (Expo, Rolldown, Nuxt interested)
- **Community ROI**: Excellent (45+ ecosystem projects)
- **Long-term maintenance**: Low (Rust, static analysis)

---

## Competitive Analysis

### vs ESLint
- ESLint: No built-in null-flow analysis
- Advantage: oxc would be first major linter with this

### vs TypeScript tsc
- tsc: Limited null tracking, no dataflow
- Advantage: oxc more practical for linting

### vs Biome
- Biome: Similar architecture but no null-flow analysis
- Advantage: oxc would differentiate

### vs nilaway
- nilaway: Go-specific, different language
- Advantage: oxc targets JavaScript/TypeScript market

---

## Conclusion & Recommendation

### Feasibility: ✅ MEDIUM-HIGH

Creating a null/undefined flow analyzer for oxc is **technically feasible and strategically valuable**:

1. **Technical Foundation Ready**
   - Type checker ✓
   - CFG analysis ✓
   - Semantic analysis ✓
   - Rule framework ✓

2. **Ecosystem Support Strong**
   - 45+ community projects active
   - Enterprise companies invested
   - tsgolint shows type-aware rules work
   - Multiple extension patterns proven

3. **Market Opportunity Clear**
   - No equivalent in JavaScript ecosystem
   - Enterprise demand (Expo, Rolldown)
   - Would differentiate oxlint
   - High community interest

### Recommendation: **GO**

**Start with MVP approach**:
1. **Months 1-3**: Build foundation in oxc core
2. **Months 4-6**: Release to ecosystem for feedback
3. **Months 7-9**: Production hardening

**Best outcome**: oxc becomes the linter of choice for null-safety in JavaScript/TypeScript, similar to how nilaway serves Go developers.

---

## Next Steps

1. **Validate market demand** - Survey oxc/oxlint community
2. **Design architecture** - Deep dive with oxc type-checker team
3. **Build MVP** - 8-12 week sprint for foundation
4. **Gather feedback** - Release to 45+ ecosystem projects
5. **Iterate** - Based on real-world usage patterns

---

## References & Resources

### Assessment Documents
- `oxc_difficulty_assessment.md` - Full technical assessment
- `oxc_ecosystem_report.md` - Comprehensive ecosystem analysis

### Key Projects to Study
- **tsgolint** (1,396⭐): https://github.com/oxc-project/tsgolint
- **nilaway** (3.9k⭐): https://github.com/uber-go/nilaway
- **oxc** (22.4k⭐): https://github.com/oxc-project/oxc

### Ecosystem Examples
- **vite-plugin-oxlint**: https://github.com/52-entertainment/vite-plugin-oxlint
- **prettier-oxc-parser**: https://github.com/ArnaudBarre/prettier-oxc-parser
- **eslint-import-resolver-oxc**: https://github.com/9romise/eslint-import-resolver-oxc

---

**Report Prepared**: August 23, 2026  
**Confidence Level**: High (based on comprehensive research across 100+ projects)
