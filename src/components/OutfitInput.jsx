// src/components/OutfitInput.jsx
import { useState } from "react";

export default function OutfitInput({ onSubmit }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return;
    onSubmit(input);
    setInput(""); 
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        type="text"
        placeholder="What are you planning to wear?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded px-2 py-1 w-64"
      />
      <button
        type="submit"
        className="px-3 py-1 rounded bg-blue-500 text-white"
      >
        Get advice
      </button>
    </form>
  );
}
