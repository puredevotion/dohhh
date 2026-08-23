# Oxc Ecosystem & Community Extensions Report

## Executive Summary

The oxc ecosystem is **actively growing** with significant community contributions. As of August 2026, there are:

- **45+ community plugin/extension projects** across GitHub
- **61 official repositories** in the oxc-project organization
- **Major tools** building on top of oxc
- **Enterprise adoption** (Expo, Rolldown, Nuxt, Shopify, ByteDance)

This report documents existing ecosystem integrations and shows there's a **strong precedent for plugin/extension development**.

---

## Part 1: Official Oxc Ecosystem (oxc-project org)

### Core Projects (20+ repos)

| Project | Stars | Purpose |
|---------|-------|---------|
| **oxc** | 22,446 | Main compiler/toolchain |
| **tsgolint** | 1,396 | Type-aware linting for oxlint ⭐ |
| **eslint-plugin-oxlint** | 452 | Disable ESLint rules already in oxlint |
| **oxc-resolver** | 290 | Module resolution (webpack-compatible) |
| **oxc-node** | 227 | Run TypeScript directly in Node.js |
| **oxlint-migrate** | 186 | Auto-migrate ESLint → oxlint configs |
| **oxc-walker** | 124 | AST walker for oxc parser |
| **javascript-parser-in-rust** | 506 | Tutorial/educational resource |

### IDE & Editor Integrations

- **oxc-vscode** (112⭐) - Official VS Code extension
- **oxc-zed** (309⭐) - Zed editor extension  
- **oxc-intellij-plugin** (105⭐) - IntelliJ IDEA/PyCharm plugin

### Benchmarks & References

- **bench-linter** (81⭐) - Shows oxlint is 50-100x faster than ESLint
- **bench-formatter** (30⭐) - Performance benchmarks
- **bench-transformer** (24⭐) - Transformation performance
- **bench-javascript-parser-written-in-rust** (109⭐) - Parser speed comparison

### Supporting Tools

- **fast-glob** (72⭐) - High-performance glob matching in Rust
- **oxc-browserslist** (61⭐) - Rust port of browserslist
- **sort-package-json** (25⭐) - Utility tool
- **website** (99⭐) - Documentation site

---

## Part 2: Community Plugins & Extensions (45+ projects)

### 🏗️ Build Tool Integrations

#### Vite Integration
- **vite-plugin-oxlint** (54⭐) - Vite plugin for oxlint
  - By: 52-entertainment
  - Status: Active
  - Link: https://github.com/52-entertainment/vite-plugin-oxlint

- **vite-plugin-oxc** (5⭐) - Oxc integration for Vite
  - By: Sunny-117
  - Status: Active
  - Link: https://github.com/Sunny-117/vite-plugin-oxc

#### Webpack Integration
- **oxc-loader** (6⭐) - High-performance webpack/Rspack loader
  - By: Sunny-117
  - Status: Active
  - Drop-in replacement for swc-loader and babel-loader
  - Link: https://github.com/Sunny-117/oxc-loader

#### Multi-build Integration
- **unplugin-version-injector** (1⭐) - Universal plugin for Vite, Rollup, Rolldown, esbuild, Webpack, Rspack, Farm
  - By: RedStar071
  - Status: Active
  - Link: https://github.com/RedStar071/unplugin-version-injector

### 🔧 Formatter & Parser Integrations

#### Prettier Integration
- **prettier-oxc-parser** (71⭐) - Use oxc as Prettier parser
  - By: ArnaudBarre
  - Status: Active
  - Link: https://github.com/ArnaudBarre/prettier-oxc-parser

#### Dprint Integration
- **dprint-plugin-oxc** (8⭐) - Adapter plugin for dprint
  - By: dprint
  - Status: Active
  - Supports both CLI and JavaScript via WASM
  - Link: https://github.com/dprint/dprint-plugin-oxc

#### ESLint Integration
- **eslint-plugin-oxfmt** (16⭐) - ESLint plugin for formatting with oxfmt
  - By: ntnyq
  - Status: Active
  - Link: https://github.com/ntnyq/eslint-plugin-oxfmt

- **eslint-import-resolver-oxc** (31⭐) - ESLint resolver using oxc-resolver
  - By: 9romise
  - Status: Active
  - For eslint-plugin-import-x
  - Link: https://github.com/9romise/eslint-import-resolver-oxc

### 📊 Analysis & Development Tools

#### Testing & Optimization
- **sovra** (39⭐) - Rust-based Test Decider for JavaScript using Oxc
  - By: oblador
  - Status: Active
  - Link: https://github.com/oblador/sovra

- **bun-plugin-isolated-decl** (25⭐) - Ultrafast .d.ts generator with Bun + oxc
  - By: ryoppippi
  - Status: Active
  - Link: https://github.com/ryoppippi/bun-plugin-isolated-decl

#### Module Graph & Resolution
- **module-graph** (53⭐) - Module graph builder using oxc-resolver
  - By: thepassle
  - Status: Active
  - Supports ESM, monorepos, import attributes, TypeScript
  - Link: https://github.com/thepassle/module-graph

### 🎨 Transformation & Compilation

#### React Compiler
- **oxc-plugin-react-compiler** (11⭐) - React Compiler ported to Rust with OXC
  - By: eve0415
  - Status: Active
  - Link: https://github.com/eve0415/oxc-plugin-react-compiler

#### JSX Transformations
- **oxc-jsx-dom-expressions** (7⭐) - Oxc port of babel-plugin-jsx-dom-expressions
  - By: XiNiHa
  - Status: Active
  - Link: https://github.com/XiNiHa/oxc-jsx-dom-expressions

#### Custom Languages
- **SkibidiScript** (2⭐) - "Brainrotted flavour of TypeScript" that transforms to JS using OXC
  - By: maciejost
  - Status: Fun project
  - Link: https://github.com/maciejost/SkibidiScript

- **txikijs-ts-transpiler** (0⭐) - TypeScript transpiler for txiki.js using OXC
  - By: saghul
  - Status: Active
  - Link: https://github.com/saghul/txikijs-ts-transpiler

### ⚙️ Configuration & Setup

#### Oxlint Configurations
- **expo/oxlint-config-universe** (14⭐) - Shared oxlint configs for Expo projects
  - By: Expo
  - Status: Active (2026)
  - Enterprise adoption pattern
  - Link: https://github.com/expo/oxlint-config-universe

- **oxlint-eslint-configs** (4⭐) - Oxlint ESLint configuration
  - By: jay-es
  - Status: Active
  - Link: https://github.com/jay-es/oxlint-eslint-configs

#### ESLint Configuration Packages
- **eslint-config-fans** (54⭐) - Opinionated ESLint config with oxlint support
  - By: fandsdev
  - Status: Active (June 2025)
  - Tags: astro, next, nuxt, vue, oxfmt, oxlint
  - Link: https://github.com/fandsdev/eslint-config-fans

- **eslint-config-setup** (2⭐) - Pre-generated flat configs for TypeScript & React
  - By: sebastian-software
  - Status: Active
  - OxLint-ready, 25 plugins
  - Link: https://github.com/sebastian-software/eslint-config-setup

- **eslint-config-monochromatic** - DEPRECATED
  - Migrated to full oxlint in main project
  - Shows successful ESLint → oxlint transition
  - Link: https://github.com/Aquaticat/Monochromatic/tree/main/package/config/oxlint

---

## Part 3: Enterprise & Major Projects Using Oxc

### Organizations Using Oxc

| Organization | Project | Use Case |
|--------------|---------|----------|
| **Rolldown** | Rolldown | Bundler (Vite successor) - uses oxc for parsing |
| **Nuxt** | Nuxt.js | Framework - uses oxc for parsing |
| **Shopify** | Various | E-commerce platform |
| **ByteDance** | Internal tools | Chinese tech giant |
| **Shopee** | Various | E-commerce |
| **Preact** | Preact framework | - |
| **Nova** | Nova editor | Uses oxc_resolver |
| **knip** | knip CLI | Uses oxc_resolver |
| **Expo** | Expo | React Native platform - active oxlint configs |

---

## Part 4: Ecosystem Patterns & Insights

### ✅ Successfully Implemented Extension Types

1. **Build Tool Plugins** (Vite, Webpack, Rollup, Rspack)
   - Pattern: Use oxlint/oxc capabilities in build pipeline
   - Status: Multiple working implementations
   - Examples: vite-plugin-oxlint, oxc-loader

2. **Formatter Integrations** (Prettier, dprint, ESLint)
   - Pattern: Use oxc parser/formatter in existing tools
   - Status: Working, mature
   - Examples: prettier-oxc-parser, dprint-plugin-oxc

3. **Configuration Migration** (ESLint → oxlint)
   - Pattern: Auto-generate oxlint configs from ESLint
   - Status: Official tooling (oxlint-migrate)
   - Examples: eslint-config-fans, eslint-config-setup

4. **Module Resolution** (ESLint plugins)
   - Pattern: Leverage oxc-resolver for faster imports
   - Status: Working
   - Examples: eslint-import-resolver-oxc

5. **IDE Extensions** (VS Code, Zed, IntelliJ)
   - Pattern: Native editor support for oxc linting
   - Status: Official & community maintained
   - Examples: oxc-vscode, oxc-zed, oxc-intellij-plugin

6. **Parser/AST Integration** (Language ports, transforms)
   - Pattern: Use oxc parser for other languages/DSLs
   - Status: Emerging pattern
   - Examples: oxc-jsx-dom-expressions, SkibidiScript

### 🚀 High-Velocity Areas

1. **Configuration Sharing** - Multiple eslint-config packages
2. **Build Integration** - Vite, Webpack, Rspack, Rollup
3. **Module Resolution** - oxc-resolver adoption
4. **IDE Integration** - Multiple editor plugins
5. **Type-Aware Linting** - tsgolint shows demand

### 📈 Growth Indicators

- **tsgolint** (1,396⭐) - Type-aware linting built ON oxc
- **Active community** - 45+ external projects
- **Enterprise adoption** - Expo, Rolldown, major companies
- **Recent activity** - Multiple 2025-2026 projects

---

## Part 5: Plugin/Extension Opportunities (Not Yet Implemented)

### High-Demand Features
Based on ecosystem patterns, these extensions would likely gain adoption:

1. **Nil/Null Flow Analysis** (The original question!)
   - ⭐ Would differentiate oxc from ESLint
   - Gap: No equivalent exists in oxc
   - Precedent: tsgolint shows type-aware rules work
   - Effort: Medium-High (see assessment)

2. **ESLint Compatibility Layer**
   - Allows running ESLint rules in oxlint
   - Bridges existing rules to oxc
   - Status: Partially solved by eslint-plugin-oxlint

3. **Biome/Prettier Configuration Converter**
   - Similar to oxlint-migrate but for other tools
   - Status: Could be community project

4. **Performance Profiling Rules**
   - Similar to performance-observer detection
   - Leverage oxc's type system
   - Status: Not yet done

5. **Security/Security Analysis Rules**
   - Detect common security issues
   - Type-aware security checks
   - Status: Limited coverage in oxlint currently

6. **Custom Rule Development Kit**
   - Make it easier for users to write custom rules
   - Plugin system for user-defined rules
   - Status: Partially available, could be enhanced

---

## Part 6: How to Contribute Extensions

### Current Mechanisms

1. **Direct Integration in oxc** (for major features)
   - Merge into oxc-project/oxc
   - Example: tsgolint rules were considered for merge
   - Best for: Core functionality, widely-needed features

2. **Community Repository** (external)
   - Create independent npm/GitHub repo
   - Use existing oxc crates as dependencies
   - Best for: Specialized features, experimental work
   - Example: All 45+ community projects

3. **Ecosystem Registry** (future)
   - oxc could benefit from plugin registry
   - Like: NPM, VS Code marketplace
   - Status: Not yet formalized

### Successful Extension Model Examples

```
vite-plugin-oxlint:
├── Depends on: oxlint binary (npx oxlint)
├── Integration: Vite plugin API
├── Distribution: npm package
└── Maintenance: Community (52-entertainment)

prettier-oxc-parser:
├── Depends on: @oxc-parser/wasm
├── Integration: Prettier parser plugin
├── Distribution: npm package
└── Maintenance: Community (ArnaudBarre)

eslint-import-resolver-oxc:
├── Depends on: oxc-resolver (oxc-project)
├── Integration: ESLint resolver interface
├── Distribution: npm package
└── Maintenance: Community (9romise)
```

---

## Part 7: Key Insights for Your Nil/Null Checker

### Positive Indicators

✅ **Strong precedent for type-aware linting**
- tsgolint (1,396⭐) proves market demand
- Already in oxc-project org = official blessing

✅ **Proven integration patterns**
- Multiple linting plugins work seamlessly
- Community contributions are accepted
- No barriers to external development

✅ **Enterprise interest**
- Expo creating oxlint configs
- Rolldown, Nuxt using oxc
- Companies willing to invest

✅ **Active community**
- 45+ projects across ecosystem
- Recent activity (2025-2026)
- Multiple organizations contributing

### Considerations

⚠️ **Integration complexity**
- Needs deep type-checker integration
- tsgolint learned this (1,396 ⭐ but tricky)
- Probably best in oxc core, not external

⚠️ **False positives matter**
- Community tools have limited tolerance
- Must be production-ready from start

⚠️ **Performance expectations**
- oxc's selling point is speed
- Any analysis must be fast
- oxlint is already 50-100x ESLint

### Best Path Forward

**Option A: Build in oxc core**
- Similar to tsgolint trajectory
- Get early feedback from team
- Then package for external use
- Most likely to succeed long-term

**Option B: Build as external analyzer**
- Create as standalone tool first
- Use as benchmark for core integration
- Lower risk, faster iteration
- See adoption patterns first

---

## Conclusion

The oxc ecosystem is **vibrant and growing** with clear patterns for extending functionality. A null/flow analysis feature would fit naturally into the ecosystem, with precedent from:

1. **tsgolint** - Type-aware rules built on oxc
2. **Dozens of plugins** - ESLint, Prettier, Vite integration
3. **Enterprise adoption** - Major companies invested in oxc toolchain
4. **Active community** - 45+ external projects, recent activity

**Recommendation**: Start with MVP in oxc core (leveraging type-checker), then consider ecosystem tooling once validated.

---

## References

### Key Ecosystem Projects
- tsgolint: https://github.com/oxc-project/tsgolint (1,396⭐)
- eslint-plugin-oxlint: https://github.com/oxc-project/eslint-plugin-oxlint (452⭐)
- oxc-resolver: https://github.com/oxc-project/oxc-resolver (290⭐)
- vite-plugin-oxlint: https://github.com/52-entertainment/vite-plugin-oxlint (54⭐)
- prettier-oxc-parser: https://github.com/ArnaudBarre/prettier-oxc-parser (71⭐)
- expo/oxlint-config-universe: https://github.com/expo/oxlint-config-universe (14⭐)

### Official Repositories
- oxc-project: https://github.com/oxc-project
- oxlint-migrate: https://github.com/oxc-project/oxlint-migrate
- oxc-walker: https://github.com/oxc-project/oxc-walker

