## 2. Setting Up TypeScript

### Installing TypeScript

```bash
npm install -g typescript
tsc --version
```

### Setting Up the TypeScript Compiler

#### `tsconfig.json`

```bash
tsc --init
```

Key Options:

- `target`, `module`, `strict`, `outDir`, `rootDir`

### Running TypeScript Files

```bash
tsc filename.ts
tsc filename.ts -w
```

### Using TypeScript with Node.js

```bash
npm install -g ts-node
ts-node filename.ts
```

### How the TypeScript Compiler Works

1. Takes `.ts` files as input.
2. Parses and checks types.
3. Transpiles to `.js`.
4. Outputs JS files for execution.

### Transpile vs Compile

- **Transpile**: TS to JS.
- **Compile**: High-level to low-level (general concept).

### Static Typed vs Dynamic Typed

| Feature          | Static Typing | Dynamic Typing |
| ---------------- | ------------- | -------------- |
| Example          | TypeScript    | JavaScript     |
| Error Detection  | Compile-time  | Runtime        |
| Type Declaration | Explicit      | Inferred       |

### Code Execution Flow

1. Write `.ts`
2. Compile using `tsc`
3. Run `.js` with Node/browser

### TypeScript + HTML

Compile `.ts` into `.js`, then link in HTML:

```html
<script src="main.js"></script>
```

Where `main.ts` compiled to `main.js`.
