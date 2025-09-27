# Quiz Application

This project is a multiple choice quiz application built using React, Vite, Tailwind CSS, and Firebase. It is designed for in-class use, allowing instructors to control the quiz flow while students participate and a public screen displays the live scoreboard.

## Features

- **Instructor View**: A dashboard for instructors to manage the quiz, control the flow, and view results.
- **Student View**: A registration form for students to enter their names and complete the quiz.
- **Public Screen**: Displays the current question and a live scoreboard for all participants.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/quiz.git
   cd quiz
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Anonymous and GitHub).
   - Set up Firestore and configure the rules as specified below.

4. Create a `.env` file based on the `.env.example` and add your Firebase configuration.

### Firebase Rules

```plaintext
service cloud.firestore {
  match /databases/{database}/documents {
    match /quizzes/{quizId} {
      allow read, write: if request.auth != null; // Authenticated users can read/write quiz data
    }
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId; // Users can only access their own data
    }
  }
}
```

### Running the Application

To start the development server, run:

```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Deployment

To deploy the application to GitHub Pages, ensure all dependencies are up to date and run:

```
npm run build
```

Then, follow the instructions in the `.github/workflows/deploy.yml` file to deploy to GitHub Pages.

### License

This project is licensed under the MIT License. See the LICENSE file for details.