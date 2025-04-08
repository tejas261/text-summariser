# 🌟 AI Text Summarizer – Chrome Extension

## 🚀 Project Overview

**AI Text Summarizer** is a powerful Chrome extension that leverages AI to summarize webpage content efficiently. Users can either select specific text or summarize an entire webpage, allowing for quick and easy understanding of content without reading every word.

---

## 🧩 Installation

To install the **AI Text Summarizer** Chrome extension:

1. **Download** or clone the repository to your local machine.
2. Open **Google Chrome** and navigate to `chrome://extensions`.
3. Enable **Developer mode** (top-right corner).
4. Click on **"Load unpacked"** and select the project directory.
5. The extension will now be installed and visible in your Chrome extensions list.

---

## 🛠️ Usage

1. Click the **AI Text Summarizer** icon in your Chrome toolbar.
2. Choose to:
   - Summarize **selected text**
   - Summarize the **entire page**
3. View the generated summary in the popup.
4. Click **"Copy Summary"** to copy the result to your clipboard.
5. Use **"Toggle Dark Mode"** to switch between light and dark themes.

---

## ✨ Features

- 📄 Summarize selected text or entire webpages.
- 🌙 Dark mode support for enhanced readability.
- ⏳ Loading spinner for AI processing feedback.
- 📋 Copy summary to clipboard with confirmation.

---

## 📦 Dependencies

This project does **not** use a `package.json`, but includes the following external library:

- [**Tailwind CSS**](https://tailwindcss.com/) – Included via CDN for styling.

---

## 📁 Project Structure

Here’s a breakdown of the project files:

| File            | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| `manifest.json` | Chrome extension metadata (permissions, scripts, etc.)                    |
| `popup.html`    | UI displayed when the extension icon is clicked                           |
| `styles.css`    | Custom CSS, including dark mode support                                   |
| `popup.js`      | Handles user interactions in the popup (summarization, theme toggling)    |
| `background.js` | Manages background tasks like storing preferences                         |
| `content.js`    | Retrieves selected text and handles communication with the active webpage |

---

## 🤝 Contributing

Contributions are welcome and appreciated!

1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature/your-feature-name`).
3. **Commit** your changes (`git commit -m 'Add some feature'`).
4. **Push** to the branch (`git push origin feature/your-feature-name`).
5. **Submit a pull request**.

Bug fixes, new features, and improvements are always welcome! 💡

---

## 📬 Feedback

Have ideas or suggestions? Feel free to open an issue or drop a message. Let’s make this tool even better together!
