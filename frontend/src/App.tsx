import React, { useState } from "react";
import { FileText, Loader2, ScanText } from "lucide-react";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const summarizeText = async () => {
    if (!text) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
        }),
      });

      const result = await response.json();
      setSummary(result[0].summary_text);
    } catch (error) {
      console.error("Error:", error);
      setSummary("Error generating summary. Please try again.");
    }
    setLoading(false);
  };

  const getCurrentPageContent = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!tab.id) return;

    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const article = document.querySelector("article");
        if (article) return article.textContent;
        return document.body.innerText;
      },
    });

    setText(result[0].result || "");
  };

  return (
    <div className="w-[400px] min-h-[300px] bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FileText className="w-5 h-5" />
          AI Text Summarizer
        </h1>
        <button
          onClick={getCurrentPageContent}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-1"
        >
          <ScanText className="w-4 h-4" />
          Scan Page
        </button>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter or paste text to summarize..."
        className="w-full h-32 p-3 border border-gray-200 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={summarizeText}
        disabled={loading || !text}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-300 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Summarizing...
          </>
        ) : (
          "Summarize"
        )}
      </button>

      {summary && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Summary</h2>
          <p className="text-gray-600 bg-gray-50 p-3 rounded-md">{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
