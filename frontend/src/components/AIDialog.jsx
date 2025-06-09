import React, { useRef, useState, useEffect } from "react";

const DEMO_ANSWERS = [
  { q: "average claim", a: "The average claim is 1260.41 units." },
  { q: "region", a: "The top region is southeast." },
  { q: "policy", a: "There are 4 unique policies in your data." },
  { q: "fraud", a: "No obvious fraud detected, but record 3 is an outlier." },
];

function getFakeAIAnswer(question) {
  const q = question.toLowerCase();
  for (const { q: kw, a } of DEMO_ANSWERS) {
    if (q.includes(kw)) return a;
  }
  return "This is a demo AI! Ask about average claim, region, policy, or fraud for a custom answer.";
}

export default function AIDialog({ onClose }) {
  const [chat, setChat] = useState([
    { sender: "ai", text: "Hello! Ask me anything about your claims data." },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const userQ = input;
    setChat((c) => [...c, { sender: "user", text: userQ }]);
    setInput("");
    setTimeout(() => {
      setChat((c) => [
        ...c,
        { sender: "ai", text: getFakeAIAnswer(userQ) },
      ]);
    }, 700);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 flex flex-col relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-blue-700 focus:outline-none"
          aria-label="Close"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <h2 className="text-xl font-bold text-blue-800 mb-2">Ask AI</h2>
        <div className="flex-1 overflow-y-auto max-h-80 border rounded-lg p-3 bg-gray-50 mb-3">
          {chat.map((msg, idx) => (
            <div
              key={idx}
              className={
                msg.sender === "user"
                  ? "text-right my-2"
                  : "text-left my-2"
              }
            >
              <span
                className={
                  msg.sender === "user"
                    ? "inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-lg"
                    : "inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-lg"
                }
              >
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <form className="flex gap-2" onSubmit={handleSend}>
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2"
            placeholder="Ask about claims, fraud, etc..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded font-semibold hover:bg-blue-800 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}