That's exactly the source of confusion. People often try to classify a language into **only one category**, but many modern languages belong to **multiple categories**.

The easiest way to think about it is:

- **Programming language** → What it is.
- **Scripting language** → How it's commonly used.
- **Compiled/Interpreted** → How its code is executed.

## Complete Classification of Popular Languages

| Language    | Programming Language | Scripting Language |           Compiled            |       Interpreted       | Notes                             |
| ----------- | :------------------: | :----------------: | :---------------------------: | :---------------------: | --------------------------------- |
| C           |          ✅          |         ❌         |              ✅               |           ❌            | Compiled directly to machine code |
| C++         |          ✅          |         ❌         |              ✅               |           ❌            | Compiled                          |
| Rust        |          ✅          |         ❌         |              ✅               |           ❌            | Compiled                          |
| Go          |          ✅          |         ❌         |              ✅               |           ❌            | Compiled                          |
| Swift       |          ✅          |         ❌         |              ✅               |           ❌            | Native compiled                   |
| Objective-C |          ✅          |         ❌         |              ✅               |           ❌            | Compiled                          |
| Fortran     |          ✅          |         ❌         |              ✅               |           ❌            | Compiled                          |
| COBOL       |          ✅          |         ❌         |              ✅               |           ❌            | Compiled                          |
| Pascal      |          ✅          |         ❌         |              ✅               |           ❌            | Usually compiled                  |
| Delphi      |          ✅          |         ❌         |              ✅               |           ❌            | Native compiled                   |
| Java        |          ✅          |         ❌         |       ✅ (to bytecode)        |     ✅ (JVM + JIT)      | Hybrid                            |
| Kotlin      |          ✅          |         ❌         |  ✅ (to bytecode/native/JS)   |           ✅            | Depends on target                 |
| Scala       |          ✅          |         ❌         |     ✅ (to JVM bytecode)      |           ✅            | Hybrid                            |
| C#          |          ✅          |         ❌         |      ✅ (to IL bytecode)      | ✅ (.NET runtime + JIT) | Similar to Java                   |
| F#          |          ✅          |         ❌         |              ✅               |           ✅            | Runs on .NET                      |
| Python      |          ✅          |         ✅         |       ✅ (to bytecode)        |           ✅            | Commonly called interpreted       |
| JavaScript  |          ✅          |         ✅         |           ✅ (JIT)            |           ✅            | Browser/Node.js                   |
| TypeScript  |          ✅          |         ❌         | ✅ (transpiles to JavaScript) |       ❌ (itself)       | Cannot run directly               |
| PHP         |          ✅          |         ✅         |              ❌               |           ✅            | Server-side scripting             |
| Ruby        |          ✅          |         ✅         |              ❌               |           ✅            | Interpreted                       |
| Perl        |          ✅          |         ✅         |              ❌               |           ✅            | Scripting                         |
| Lua         |          ✅          |         ✅         |              ❌               |           ✅            | Embedded scripting                |
| R           |          ✅          |         ✅         |              ❌               |           ✅            | Data science                      |
| MATLAB      |          ✅          |         ✅         |              ❌               |           ✅            | Scientific computing              |
| Bash        |          ✅          |         ✅         |              ❌               |           ✅            | Shell scripting                   |
| PowerShell  |          ✅          |         ✅         |              ❌               |           ✅            | Windows automation                |

---

# Where does TypeScript fit?

This is one of the biggest interview questions.

You write:

```typescript
let age: number = 25;
```

This **cannot run** in a browser or in Node.js directly.

Instead:

```text
TypeScript (.ts)
        │
        ▼
TypeScript Compiler (tsc)
        │
        ▼
JavaScript (.js)
        │
        ▼
Browser / Node.js
        │
        ▼
JavaScript Engine (V8, SpiderMonkey, etc.)
        │
        ▼
Machine Code (via interpretation + JIT)
```

So:

- Is TypeScript a programming language? ✅ Yes.
- Is it compiled? ✅ Yes, but it is **transpiled** (compiled from one high-level language to another high-level language: JavaScript).
- Is it interpreted? ❌ No, TypeScript itself is not interpreted.

---

# Where does C# fit?

```text
C# Source (.cs)
       │
       ▼
C# Compiler
       │
       ▼
IL (Intermediate Language)
       │
       ▼
.NET CLR
       │
       ▼
JIT Compiler
       │
       ▼
Machine Code
```

So:

- Programming language? ✅
- Compiled? ✅
- Interpreted? ⚠️ Not in the traditional sense. The compiled IL is executed by the .NET runtime, which uses JIT compilation.

---

# Java follows almost the same model

```text
Java (.java)
      │
      ▼
javac
      │
      ▼
Bytecode (.class)
      │
      ▼
JVM
      │
      ▼
JIT Compiler
      │
      ▼
Machine Code
```

---

# The simplest way to remember

There are **four broad execution models**:

| Category                              | Examples                            | Output                                                |
| ------------------------------------- | ----------------------------------- | ----------------------------------------------------- |
| Native compiled                       | C, C++, Rust, Go, Swift             | Machine code                                          |
| Bytecode compiled + VM/JIT            | Java, C#, Kotlin, Scala, F#         | Bytecode/IL, then machine code at runtime             |
| Interpreted (often with bytecode/JIT) | Python, JavaScript, PHP, Ruby, Perl | Executed by an interpreter/runtime                    |
| Transpiled                            | TypeScript, Sass                    | Another high-level language (e.g., JavaScript or CSS) |

---

## Interview Tip

If an interviewer asks **"Is JavaScript an interpreted language?"**, the modern answer is:

> Historically, JavaScript was interpreted. Today, JavaScript engines such as V8 first parse the code, often interpret it, and then use **Just-In-Time (JIT)** compilation to convert frequently executed code into machine code for better performance.

Similarly:

- **Java** → Compiled to bytecode, then JIT-compiled by the JVM.
- **C#** → Compiled to IL, then JIT-compiled by the CLR.
- **Python** → Usually compiled to bytecode and executed by the Python virtual machine.
- **TypeScript** → Transpiled to JavaScript before execution.

This is why many modern languages don't fit neatly into just "compiled" or "interpreted"—they use a combination of techniques.
