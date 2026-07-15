This is a very common source of confusion because these terms describe **different aspects** of how languages work. Some describe **how code is executed** (compiled vs interpreted), while others describe **what the language is typically used for** (scripting vs programming). They are not mutually exclusive.

Let's build the concepts from the ground up.

---

# 1. Programming Language

A **programming language** is any language used to write instructions that a computer can execute.

Think of it like this:

> Programming language = A language used to create software.

Examples:

* C
* C++
* Java
* Python
* JavaScript
* Go
* Rust

All of these are programming languages.

---

## Real-life example

Imagine you're giving instructions to a chef.

```
1. Cut vegetables.
2. Add oil.
3. Cook for 10 minutes.
```

These are instructions.

Programming languages are simply instructions for computers.

---

# 2. Compiler

A compiler translates the **entire source code** into machine code **before** the program runs.

## Flow

```
Source Code
      │
      ▼
 Compiler
      │
      ▼
Machine Code (.exe)
      │
      ▼
Program Runs
```

Example using C

```c
#include <stdio.h>

int main() {
    printf("Hello");
}
```

### What happens?

Step 1

You write

```
hello.c
```

Step 2

Compiler converts

```
hello.c
```

into

```
hello.exe
```

Step 3

Run

```
hello.exe
```

Computer executes machine code directly.

---

### Advantages

✅ Faster execution

✅ Better optimization

✅ Errors detected before execution

---

### Disadvantages

❌ Compilation takes time

❌ Must recompile after every change

---

### Languages commonly compiled

* C
* C++
* Rust
* Go

---

# 3. Interpreter

An interpreter reads the program and executes it **line by line**.

Instead of creating an executable file, it runs each statement as it goes.

```
Source Code
      │
      ▼
 Interpreter
      │
Executes line by line
```

Example

```python
print("Hello")

print("World")
```

Execution

```
Interpreter

Line 1 → Execute

Output:
Hello

↓

Line 2 → Execute

Output:
World
```

No executable is created.

---

### Advantages

✅ Easy testing

✅ No separate compilation

✅ Faster development

---

### Disadvantages

❌ Slower execution

❌ Errors may appear only when execution reaches that line

---

Examples

* Python (via the standard interpreter)
* Ruby

---

# Compiler vs Interpreter

| Compiler                       | Interpreter                               |
| ------------------------------ | ----------------------------------------- |
| Translates entire program      | Translates one line at a time             |
| Produces executable            | Usually no executable                     |
| Faster execution               | Slower execution                          |
| Errors reported before running | Errors reported as execution reaches them |

---

# 4. Scripting Language

This is where many people get confused.

A **scripting language** is **still a programming language**.

It is mainly designed to automate tasks or control another program or runtime environment.

Examples

* JavaScript (in browsers)
* Python
* PHP
* Bash

---

## Example

Imagine Microsoft Word.

You write a macro that automatically:

```
Open document

↓

Change font

↓

Save document

↓

Close document
```

That automation script controls another application.

---

Another example

Suppose you have 1000 images.

Instead of renaming manually

```
Image1.jpg

Image2.jpg

...

Image1000.jpg
```

Python script

```python
rename_all_images()
```

Done automatically.

That's scripting.

---

# Programming Language vs Scripting Language

Programming Language

```
Create Operating System

Create Browser

Create Game

Create Database
```

Examples

* C
* C++
* Java

---

Scripting Language

```
Automate tasks

Control applications

Write web pages

Automate testing
```

Examples

* JavaScript
* Python
* Bash

---

# Is JavaScript a Programming Language?

YES.

It is also a scripting language.

Both statements are correct.

---

# Is Python a Programming Language?

YES.

Also a scripting language.

---

# Is C a Scripting Language?

Generally, no.

It is considered a compiled systems programming language.

---

# Is Java Compiled or Interpreted?

Interesting question.

Java is both.

```
Java Source

↓

Compiler

↓

Bytecode (.class)

↓

JVM Interpreter/JIT

↓

Machine Code
```

Java first compiles to bytecode, then the Java Virtual Machine executes that bytecode. Modern JVMs also use **Just-In-Time (JIT)** compilation to compile frequently used code into native machine code for better performance.

---

# Is JavaScript Interpreted?

Historically:

YES.

Modern answer:

JavaScript engines (such as V8) both interpret and JIT-compile JavaScript for performance. So describing JavaScript as "purely interpreted" is an oversimplification today.

---

# Is Python Interpreted?

Mostly yes.

```
Python Code

↓

Bytecode

↓

Python Virtual Machine

↓

Execution
```

CPython compiles source code to bytecode first, then executes it with the Python virtual machine. Other Python implementations may work differently.

---

# Simple Analogy

Imagine translating an English book into Marathi.

## Compiler

Translate the **entire book** first.

```
Whole Book

↓

Translate

↓

Read Anytime
```

Fast reading later.

---

## Interpreter

Translate **one page at a time** while reading.

```
Page 1

↓

Translate

↓

Read

↓

Page 2

↓

Translate

↓

Read
```

Slower, but you can start immediately.

---

# Relationship Diagram

```
                    Programming Languages
                           │
      ┌────────────────────┴────────────────────┐
      │                                         │
Compiled Languages                    Interpreted Languages
(C, C++, Go, Rust)                 (Python*, JavaScript*, Ruby)

      *Modern implementations often use a mix of interpretation and compilation.

Programming Languages
      │
      ├── Can also be Scripting Languages
      │       │
      │       ├── JavaScript
      │       ├── Python
      │       ├── Bash
      │       └── PHP
      │
      └── Systems/Application Languages
              ├── C
              ├── C++
              ├── Rust
              └── Go
```

## Key takeaway

The easiest way to remember the terms is:

* **Programming language** = Any language used to write software.
* **Scripting language** = A programming language commonly used to automate tasks or control another program/runtime.
* **Compiled** = Describes *how* code is translated into machine code (usually before execution).
* **Interpreted** = Describes *how* code is executed (typically as it is read, though many modern runtimes combine interpretation with compilation).

Modern languages often blur these categories. For example, Java, Python, and JavaScript all use a combination of compilation and interpretation internally, even though they're commonly taught as compiled or interpreted languages.
