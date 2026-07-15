// 𝐂𝐨𝐦𝐦𝐨𝐧 𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭 𝐌𝐢𝐬𝐭𝐚𝐤𝐞𝐬 𝐢𝐧 𝐑𝐞𝐚𝐜𝐭 (𝐚𝐧𝐝 𝐁𝐞𝐭𝐭𝐞𝐫 𝐏𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬)

// As I wrap up my 10-day TypeScript challenge, I want to end with a practical topic that many developers face when using TypeScript with React:
// common mistakes that reduce the benefits of TypeScript—and how to avoid them.

// 1️⃣ 𝐎𝐯𝐞𝐫𝐮𝐬𝐢𝐧𝐠 𝐚𝐧𝐲

// One of the most common mistakes is falling back to any too quickly.

const data: any = fetchData();

// While this removes type errors, it also removes type safety, which is the main reason to use TypeScript in the first place.

// ✅ 𝐁𝐞𝐭𝐭𝐞𝐫 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞:
// Use proper types or unknown and narrow the type when needed.

// 2️⃣ 𝐍𝐨𝐭 𝐓𝐲𝐩𝐢𝐧𝐠 𝐑𝐞𝐚𝐜𝐭 𝐇𝐨𝐨𝐤𝐬 𝐄𝐱𝐩𝐥𝐢𝐜𝐢𝐭𝐥𝐲

// Relying entirely on type inference can be risky, especially with complex state or refs.

const [value, setValue] = useState(null); // unclear type

// ✅ 𝐁𝐞𝐭𝐭𝐞𝐫 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞:

const [value, setValue] = useState<number | null>(null);

// Explicit types improve readability and prevent future bugs.

// 3️⃣ 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐨𝐫 𝐄𝐱𝐜𝐞𝐬𝐬𝐢𝐯𝐞 𝐔𝐬𝐞 𝐨𝐟 𝐑𝐞𝐚𝐜𝐭.𝐅𝐂

// Using React.FC everywhere can introduce unnecessary constraints, especially around children.

// ✅ 𝐁𝐞𝐭𝐭𝐞𝐫 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞:
// Use plain function components unless you explicitly need what React.FC provides.

type Props = {
  title: string;
};

function Header({ title }: Props) {
  return <h1>{title}</h1>;
}

// 4️⃣ 𝐒𝐤𝐢𝐩𝐩𝐢𝐧𝐠 𝐓𝐲𝐩𝐞 𝐍𝐚𝐫𝐫𝐨𝐰𝐢𝐧𝐠

// When working with union types, calling properties or methods without narrowing leads to errors or unsafe code.

type User = Admin | Guest;
// accessing admin-only properties without checks ❌

// ✅ 𝐁𝐞𝐭𝐭𝐞𝐫 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞:
// Use in, instanceof, or custom type guards to narrow types safely.

// 5️⃣ 𝐃𝐮𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐧𝐠 𝐓𝐲𝐩𝐞𝐬 𝐈𝐧𝐬𝐭𝐞𝐚𝐝 𝐨𝐟 𝐑𝐞𝐮𝐬𝐢𝐧𝐠 𝐓𝐡𝐞𝐦

// Defining similar types multiple times increases maintenance cost.

// ✅ 𝐁𝐞𝐭𝐭𝐞𝐫 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞:
// Leverage type aliases, interfaces, and utility types (Pick, Omit, Partial) to keep types consistent and reusable.

// 𝐅𝐢𝐧𝐚𝐥 𝐓𝐡𝐨𝐮𝐠𝐡𝐭𝐬

// TypeScript is not just about “fixing errors.”
// It’s about designing safer APIs, improving readability, and scaling React applications with confidence.

// This challenge helped me understand that writing good TypeScript in React is less about syntax—and more about intentional design decisions.
