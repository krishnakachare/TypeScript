Great! Now, let's explore **Chapter 10: TypeScript with Frontend Frameworks**, where we’ll see how TypeScript enhances popular frontend frameworks like React, Angular, and Vue.

---

# 📘 Chapter 10: TypeScript with Frontend Frameworks

---

## 🔹 Why Use TypeScript in Frontend Development?

- **Improved Code Quality**: Type safety reduces runtime errors.
- **Better Developer Experience**: Auto-completion, refactoring, and IDE support.
- **Scalability**: Helps manage large codebases efficiently.
- **Maintainability**: Encourages cleaner, more structured code.

---

## 🚀 TypeScript with React

React is a widely used frontend library for building user interfaces. TypeScript integrates smoothly with React.

### 🛠 Setting Up a TypeScript React Project

```sh
npx create-react-app my-app --template typescript
```

### 🏗️ Defining Component Props with TypeScript

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### 🏛️ Using TypeScript with Hooks

```tsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

---

## 🚀 TypeScript with Angular

Angular is a full-fledged framework built with TypeScript.

### 🛠 Setting Up an Angular Project

```sh
ng new my-angular-app --strict
```

### 🏗️ Defining Interfaces for Type Safety

```ts
export interface User {
  id: number;
  name: string;
  email: string;
}
```

### 🏛️ TypeScript in Angular Components

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  template: `<h1>Hello, {{ name }}</h1>`,
})
export class HelloComponent {
  name: string = "Angular";
}
```

---

## 🚀 TypeScript with Vue

Vue is a progressive framework that also supports TypeScript.

### 🛠 Setting Up a TypeScript Vue Project

```sh
vue create my-vue-app
```

Select **Manually configure features**, then enable TypeScript.

### 🏗️ Using TypeScript in Vue Components

```vue
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "Hello Vue with TypeScript!",
    };
  },
});
</script>

<template>
  <h1>{{ message }}</h1>
</template>
```

---

## 🏗️ How to Set Up a TypeScript Project with Webpack

For advanced configurations, you can set up a custom TypeScript project using Webpack.

### 🛠 Install Required Dependencies

```sh
npm install --save-dev typescript ts-loader webpack webpack-cli
```

### 🏛️ Webpack Configuration (`webpack.config.js`)

```js
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
  },
};
```

---

## 🧠 Summary

| Feature          | React                                               | Angular                          | Vue                         |
| ---------------- | --------------------------------------------------- | -------------------------------- | --------------------------- |
| Setup Command    | `npx create-react-app my-app --template typescript` | `ng new my-angular-app --strict` | `vue create my-vue-app`     |
| Component Syntax | JSX/TSX                                             | Decorators (`@Component`)        | `.vue` files                |
| State Management | `useState`, `useReducer`                            | Services, RxJS                   | Vuex, Pinia                 |
| Type Safety      | Props & Hooks                                       | Interfaces                       | TypeScript support in Vue 3 |
