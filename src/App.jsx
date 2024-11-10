import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [triangle, setTriangle] = useState([]);

  const generateTriangle = (e) => {
    const number = parseInt(input, 10);

    const rows = [];
    if (number % 2 === 0) {
      for (let i = 1; i <= number; i++) {
        const line = " ".repeat(number - i) + "*".repeat(i);
        rows.push(line);
      }
    } else {
      for (let i = number; i > 0; i--) {
        const line = " ".repeat(number - i) + "*".repeat(i);
        rows.push(line);
      }
    }

    setTriangle(rows);

    e.preventDefault();
  };
  return (
    <div className="min-h-screen items-center justify-center bg-black flex flex-col">
      <span className="text-[24px] text-white font-bold mb-4">
        Triangle Generator
      </span>

      {/** Form Input Number To Create Tri-Star Start */}
      <form
        action=""
        onSubmit={generateTriangle}
        className="flex flex-col w-full max-w-[300px]"
      >
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded mb-4 text-center"
          placeholder="Enter an integer"
          min={1}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Generate Triangle
        </button>
      </form>
      {/** Form Input Number To Create Tri-Star End */}

      <div className="flex flex-col items-center mt-[5px]">
        <pre className="mt-6 text-[16px] text-center text-white">
          {triangle.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </pre>
      </div>
    </div>
  );
}

export default App;
