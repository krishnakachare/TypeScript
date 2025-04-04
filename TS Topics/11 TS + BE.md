Great! Now, let's dive into **Chapter 11: TypeScript with Backend Development**, where we explore how TypeScript enhances backend development with **Node.js, Express, and databases**.

---

# 📘 Chapter 11: TypeScript with Backend Development

---

## 🔹 Why Use TypeScript in Backend Development?

- **Type Safety**: Reduces runtime errors in APIs and database queries.
- **Better Code Organization**: Classes, interfaces, and modules improve maintainability.
- **Strong IDE Support**: Auto-completion, error checking, and refactoring.
- **Scalability**: Suitable for enterprise-level applications.

---

## 🚀 Setting Up a TypeScript Backend with Node.js

### 🛠 Initialize a TypeScript Project

```sh
mkdir my-backend && cd my-backend
npm init -y
npm install --save-dev typescript ts-node @types/node
```

### 🏗️ Create a `tsconfig.json` File

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

---

## 🔗 Using TypeScript with Express.js

### 🛠 Install Express and TypeScript Types

```sh
npm install express
npm install --save-dev @types/express
```

### 🏗️ Create a Simple Express Server

```ts
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## 🏛️ Creating Type-Safe API Routes

### 📌 Defining an Interface for a User

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

### 📌 Implementing a CRUD API

```ts
let users: User[] = [];

app.post("/users", (req: Request, res: Response) => {
  const newUser: User = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});
```

---

## 🗄️ Using TypeScript with Databases

### 🔹 TypeScript with TypeORM (SQL Databases)

```sh
npm install typeorm reflect-metadata sqlite3
npm install --save-dev @types/node
```

### 🏗️ Defining an Entity

```ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

### 🔹 TypeScript with Prisma (SQL & NoSQL)

```sh
npm install @prisma/client
npx prisma init
```

### 🏗️ Define a Schema (`prisma/schema.prisma`)

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

### 🛠 Running Migrations

```sh
npx prisma migrate dev --name init
```

### 📌 Fetching Data with Prisma

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

getUsers();
```

---

## 🔐 TypeScript with Authentication (JWT)

### 🛠 Install Dependencies

```sh
npm install jsonwebtoken bcryptjs
npm install --save-dev @types/jsonwebtoken @types/bcryptjs
```

### 🏗️ Hashing Passwords with `bcrypt`

```ts
import bcrypt from "bcryptjs";

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};
```

### 🏗️ Generating and Verifying JWT Tokens

```ts
import jwt from "jsonwebtoken";

const secretKey = "your_secret_key";

const generateToken = (userId: number) => {
  return jwt.sign({ id: userId }, secretKey, { expiresIn: "1h" });
};
```

---

## 🧠 Summary

| Feature        | Tool / Library        |
| -------------- | --------------------- |
| Web Framework  | Express.js            |
| Database ORM   | TypeORM, Prisma       |
| Authentication | JWT, bcrypt.js        |
| HTTP Requests  | Fetch, Axios          |
| Type Safety    | TypeScript Interfaces |
