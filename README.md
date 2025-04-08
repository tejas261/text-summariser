```markdown
**AI Text Summarizer**

##Project Overview

AI Text Summarizer is a Chrome extension that leverages AI to summarize webpage content. It allows users to either select specific text or summarize an entire webpage, providing a quick way to digest information without having to read everything in detail.

##Installation

To install the AI Text Summarizer Chrome extension, follow these steps:

1. Download the project files to your local machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded the project files.
5. The extension should now be installed and visible in your extensions list.

##Usage

1. Click on the AI Text Summarizer icon in the Chrome toolbar.
2. Choose to summarize either the selected text or the full page by clicking the corresponding button.
3. The summary output will be displayed in the text area.
4. You can copy the summary to your clipboard by clicking the "Copy Summary" button.
5. Use the "Toggle Dark Mode" button to switch between light and dark themes.

##Features

- Summarize selected text or entire webpages.
- Dark mode support for better readability in low-light environments.
- Loading spinner to indicate processing.
- Copy summary functionality with user feedback.

##Dependencies

This project does not have additional dependencies specified in a `package.json` file, but it uses the following external libraries:

- Tailwind CSS for styling (included via CDN).

##Project Structure

The project files are organized as follows:


###File Descriptions
- **manifest.json**: Contains metadata for the Chrome extension, including permissions and background scripts.
- **popup.html**: The user interface displayed when the extension icon is clicked.
- **styles.css**: CSS styles for the popup interface, including styles for dark mode.
- **popup.js**: JavaScript to handle user interactions within the popup, such as summarizing text and toggling dark mode.
- **background.js**: Manages background processes, including storing user preferences.
- **content.js**: Listens for messages and retrieves selected text from the current page.

##Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Features, bug fixes, and improvements are always welcome!

```
