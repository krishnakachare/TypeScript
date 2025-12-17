// When working with React + TypeScript, defining clear types for your hooks helps you write safer, cleaner, and more predictable components.Two of the most commonly typed hooks are:

// * 𝐮𝐬𝐞𝐒𝐭𝐚𝐭𝐞
//     * 𝐮𝐬𝐞𝐑𝐞𝐟

// Let’s walk through both with practical examples 👇


// 🔹 𝐓𝐲𝐩𝐢𝐧𝐠 𝐮𝐬𝐞𝐒𝐭𝐚𝐭𝐞

// A basic useState without an explicit type:

const [frontEndi, setFrontEndi] = useState(0)

// Here, TypeScript infers the state type as number.
// But you can also explicitly define the type:

const [frontEndi, setFrontEndi] = useState < number > (0)

// Now this state is strictly a number, and assigning anything else will trigger a TypeScript error.
// You can also allow multiple types using a union:

const [frontEndi, setFrontEndi] = useState < number | string > (0)

// Now the state accepts both number and string — useful in cases where the state may change types(e.g., controlled inputs).


// 🔹 𝐓𝐲𝐩𝐢𝐧𝐠 𝐮𝐬𝐞𝐑𝐞𝐟

// useRef is often used to access DOM nodes, and typing it correctly prevents runtime surprises.

// Example of a typed ref for an < input >:

import React, { useEffect, useRef } from "react";

const Counter: React.FC = () => {
    const ref = useRef < HTMLInputElement > (null);

    useEffect(() => {
        if (ref.current) ref.current.focus();
    }, []);

    return <input type="text" ref={ref} />;
};

export default Counter;

// Here’s what we accomplished:

// * useRef < HTMLInputElement > (null) tells TypeScript that this ref will hold an HTMLInputElement
//     * TypeScript now safely checks ref.current before accessing properties like.focus()
//         * IDE autocomplete becomes much more accurate



// 𝐓𝐲𝐩𝐢𝐧𝐠 𝐲𝐨𝐮𝐫 𝐡𝐨𝐨𝐤𝐬 𝐢𝐧 𝐑𝐞𝐚𝐜𝐭:

// * Reduces runtime bugs
//     * Improves IDE autocompletion
//         * Makes components predictable and self - documenting
//             * Plays a big role in scaling projects cleanly