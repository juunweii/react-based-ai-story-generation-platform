# react-based-ai-story-generation-platform

This project is a simple web application that displays a story to the user. The story is initially loaded with a predefined paragraph, and as the user scrolls to the bottom of the page, new paragraphs are dynamically added to the story.

## Features

- **Dynamic Story Loading:** The initial story is loaded when the page loads. As the user scrolls to the bottom of the page, new paragraphs are fetched and added to the story.
- **Scroll Event Handling:** The application listens for scroll events to determine when the user has reached the bottom of the page, triggering the loading of new paragraphs.


## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the local development server.
4. Open your browser and go to `http://localhost:3000` to view the application.

Note: The Django backend integration is still in progress, so the story paragraphs are currently static and predefined.
