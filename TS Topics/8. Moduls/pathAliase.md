### ✅ **Path Aliases in TypeScript** – *Complete Explanation with Examples*

---

### 🔸 What Are Path Aliases?

**Path aliases** in TypeScript allow you to define custom shortcuts (aliases) for module import paths. Instead of using long, relative paths like:

```ts
import { add } from '../../utils/mathUtils';
```

You can do:

```ts
import { add } from '@utils/mathUtils';
```

This improves:

* **Readability**
* **Maintainability**
* **Scalability**

---

### 🔸 How to Set Up Path Aliases in TypeScript

#### 🧩 Step 1: Define Aliases in `tsconfig.json`

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"],
      "@services/*": ["services/*"],
      "@types/*": ["types/*"]
    }
  }
}
```

* `baseUrl: "./src"` means all imports are relative to `src/`.
* `paths` define the alias and what path it maps to.

---

#### 📁 Folder Structure Example

```
src/
│
├── components/
│   └── Button.tsx
│
├── utils/
│   └── mathUtils.ts
│
├── services/
│   └── ApiService.ts
│
├── types/
│   └── User.ts
│
└── App.tsx
```

---

### 🔸 How to Use Aliases in Code

#### ✅ Example 1: Import a Component

```tsx
// App.tsx
import Button from '@components/Button';
```

#### ✅ Example 2: Import a Utility Function

```ts
import { add } from '@utils/mathUtils';
```

#### ✅ Example 3: Import an Interface

```ts
import { User } from '@types/User';
```

---

### 🔸 Extra Step: Support Aliases in Build Tools

#### ✅ If you're using **Node.js / ts-node**, install:

```bash
npm install tsconfig-paths
```

And run:

```bash
ts-node -r tsconfig-paths/register src/index.ts
```

#### ✅ If you're using **Webpack**, update `webpack.config.js`:

```js
resolve: {
  alias: {
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    // etc.
  }
}
```

#### ✅ If you're using **Vite**:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()]
});
```

---

### ✅ Benefits of Using Path Aliases

| Benefit            | Description                               |
| ------------------ | ----------------------------------------- |
| Clean Imports      | Avoid messy `../../../../../` paths       |
| Easier Refactoring | Move folders without breaking all imports |
| Better IDE Support | Works great with VSCode IntelliSense      |
| More Maintainable  | Scales well with large codebases          |

---

### 🔴 Common Errors & Fixes

| Error                                   | Cause                                 | Fix                                         |
| --------------------------------------- | ------------------------------------- | ------------------------------------------- |
| *Cannot find module '@utils/mathUtils'* | VSCode or runtime can't resolve paths | Make sure `baseUrl` and `paths` are correct |
| Aliases not working in Jest             | Jest needs custom config              | Use `moduleNameMapper` in `jest.config.js`  |
| Works in TS but not at runtime          | Missing `tsconfig-paths` in Node      | Use `tsconfig-paths` or configure bundler   |

---

### 🔍 Summary

| Element      | Example                                         |
| ------------ | ----------------------------------------------- |
| Define in TS | `tsconfig.json → paths`                         |
| Use in code  | `import from '@utils/mathUtils'`                |
| Works in     | VSCode, Vite, Webpack, Node, Jest (with config) |

