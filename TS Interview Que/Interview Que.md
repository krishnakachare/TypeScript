🔥 1. interface vs type — When do you choose what?
What interviewer wants: depth, not definition.
✅ Answer (Senior):
Use interface for public APIs, object shapes, and extensibility (supports declaration merging).
Use type for unions, intersections, primitives, tuples, utility compositions.

🔥 2. How does TypeScript’s structural typing work?
Interview angle: JS compatibility + safety.
✅ Answer:
TypeScript checks shape, not name.
If two objects have the same structure, they’re compatible — even if types differ.
📌 Why it matters:
Great for JS interop, dangerous if you don’t validate inputs.

🔥 3. Explain unknown vs any
This separates juniors from seniors.
✅ Answer:
any → disables type safety
unknown → forces type checking before usage

🔥 4. What are Generics and where have you used them?
Expected: real use-case, not textbook.
✅ Answer:
Generics make functions & components reusable + type-safe.
📌 Used in:
API response wrappers
Reusable React components
Utility functions

🔥 5. Difference between Partial, Pick, Omit
Product companies love this.
✅ Answer:
Partial<T> → all properties optional
Pick<T, K> → select keys
Omit<T, K> → exclude keys

🔥 6. How does TypeScript handle union narrowing?
Checks debugging ability.
✅ Answer:
Using type guards.
function print(value: string | number) {
if (typeof value === "string") {
value.toUpperCase()
}
}

🔥 7. Explain readonly vs as const
Subtle but senior-level.
✅ Answer:
readonly → makes properties immutable
as const → freezes values + types
const roles = ["admin", "user"] as const

🔥 8. What are conditional types?
Advanced but common in product codebases.
✅ Answer:
Types that depend on conditions.
type IsString<T> = T extends string ? true : false

🔥 9. How do you type API responses safely?
Real-world scenario question.
✅ Answer:
Create response contracts
Avoid any
Use generics + unknown

🔥 10. Biggest TypeScript mistake you’ve seen in teams?
Behavioral + technical combined.
✅ Answer:
“Using any to move fast — and slowing down later with bugs.”
📌 Fix:
Strict mode
Shared utility types
Review type boundaries
