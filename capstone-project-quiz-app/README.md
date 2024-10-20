

# Quiz App

An interactive quiz application built using React that dynamically fetches questions from the Open Trivia Database API. Users can choose quiz categories, difficulty levels, and the number of questions. The app tracks the user’s score and provides feedback for each question.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
  
## Features

- Dynamic Quiz Generation: Users can select quiz category, difficulty level, and the number of questions.
- Multiple Choice Questions: Questions are fetched dynamically and displayed one at a time.
- **Score Tracking**: The user’s score is tracked, and results are displayed at the end of the quiz.
- **Answer Feedback**: Users receive feedback after each question.
- **Retake Option**: Users can retake the quiz after finishing.

## Demo

Check out the live demo: [Quiz App Demo](https://ibrahim-shifa-quiz-app.vercel.app/)

## Technologies

- **React** (Frontend Framework)
- **Tailwind CSS** (Styling)
- **Open Trivia Database API** (API for questions)
- **JavaScript (ES6)**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ibroshifa/alx-fe-reactjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd capstone-project-quiz-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will be running at `http://localhost:3000`.

## Usage

1. **Home Screen**: Choose your quiz preferences such as the number of questions, category, and difficulty level.
2. **Quiz Interface**: Answer the questions displayed one by one. After each answer, the app will tell you whether your selection is correct.
3. **Results Screen**: At the end of the quiz, your total score will be shown. You can choose to retake the quiz or modify your preferences.

## API Reference

The Quiz App uses the **Open Trivia Database API** to fetch questions dynamically.

### API Endpoints

- **Base URL**: `https://opentdb.com/api.php`
- **Query Parameters**:
  - `amount`: Number of questions (required).
  - `category`: Category ID for the questions (optional).
  - `difficulty`: Difficulty level (`easy`, `medium`, `hard`) (optional).
  - `type`: Question type (`multiple`, `boolean`) (optional).

**Example API Request**:

```bash
https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
```

## Project Structure

```bash
quiz-app/
│
├── public/                 # Public assets (HTML, images)
├── src/                    # Source files
│   ├── components/         # React components
│   ├── utils/              # Utility functions
│   ├── App.js              # Main App component
│   ├── index.js            # Entry point of the app
│   ├── styles/             # Tailwind CSS styling
├── package.json            # Project configuration and dependencies
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push your branch to your fork: `git push origin feature-branch-name`.
5. Submit a pull request describing your changes.



