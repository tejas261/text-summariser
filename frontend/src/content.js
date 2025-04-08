chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === "summarizeSelection") {
    try {
      const response = await fetch("http://localhost:8000/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          parameters: {
            max_length: 500,
            min_length: 30,
          },
        }),
      });

      const result = await response.json();
      const summary = result[0].summary_text;

      // Create and show the summary popup
      const popup = document.createElement("div");
      popup.className = "ai-summary-popup";
      popup.innerHTML = `
        <div class="ai-summary-content">
          <div class="ai-summary-header">
            <h3>AI Summary</h3>
            <button class="ai-summary-close">×</button>
          </div>
          <p>${summary}</p>
        </div>
      `;

      // Add styles
      const style = document.createElement("style");
      style.textContent = `
        .ai-summary-popup {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10000;
          max-width: 400px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          animation: slideIn 0.2s ease-out;
        }
        
        .ai-summary-content {
          padding: 16px;
        }
        
        .ai-summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .ai-summary-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .ai-summary-close {
          background: none;
          border: none;
          font-size: 24px;
          color: #666;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }
        
        .ai-summary-close:hover {
          color: #1a1a1a;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `;

      document.head.appendChild(style);
      document.body.appendChild(popup);

      // Handle close button
      const closeButton = popup.querySelector(".ai-summary-close");
      closeButton.addEventListener("click", () => {
        popup.remove();
      });

      // Auto-remove after 10 seconds
      setTimeout(() => {
        if (document.body.contains(popup)) {
          popup.remove();
        }
      }, 10000);
    } catch (error) {
      console.error("Error:", error);
    }
  }
});
