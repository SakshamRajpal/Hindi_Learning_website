## Live Link:- https://hindi-learning-website.vercel.app/ 
## Project Repository:- https://github.com/SakshamRajpal/Hindi_Learning_website
## Demo Video Link:- https://www.youtube.com/watch?v=pj3ur1EBI_U
## PPT Link:- https://drive.google.com/file/d/1ySH3ePEfJ_QSGSmUUqTeNEWbZ7Tq6xcp/view
## LinkedIn Post:- https://www.linkedin.com/posts/jagjeet-singh-b28097271_codeclash-hindilearning-edtech-activity-7343251785639149568-dT9G?utm_source=share&utm_medium=member_android&rcm=ACoAADmGCQQBWt1CDoyVa2HOJKCIVCfvnPyqsHs

# HindiSafarSeekho 🇮🇳🗣️

A culturally-aware and conversational Hindi learning platform for non-Hindi speakers—tourists, students, and expats in India.

![Screenshot 2025-06-24 125719](https://github.com/user-attachments/assets/cffdeb76-9dbc-47ed-a8e9-d68e070ec629)
---

## 📌 Problem Statement

Millions of non-Hindi speakers, especially those visiting or living in India, struggle with conversational Hindi. Existing tools are often too generic, grammar-heavy, or detached from real-life cultural context—making practical communication difficult.

---

## 🎯 Project Overview

**HindiSafarSeekho** is a modern, interactive web platform designed to help non-Hindi speakers learn useful, everyday Hindi in a fun and engaging way.

### ✨ Key Features

- 🏠 **Home Page**: Welcome screen with introduction and navigation
- 📚 **Lesson Page**: Structured tutorials and quick quizzes to reinforce learning
- 🔤 **Alphabet Page**: Learn the Hindi script with visual and audio support
- 📝 **Practice Page**: Attempt mock quizzes and track your improvement
- 🏆 **Leaderboard Page**: View quiz streaks and compare your progress with others
- 🔐 **Login/Register**: Secure authentication using Firebase
- 🤖 **AI Chatbot**: Google Dialogflow-based chatbot to assist with:
  - Sentence formation(Example Question:- Hindi greetings)  
  - Vocabulary enhancement(Example Question:- Hindi Verbs and Nouns)   
  - Basic conversational practice(Example Question:- Hindi Numbers from 1 to 10)   
- 🗣️ **Text-to-Speech**: Audio playback for pronunciation help
- 💬 **Phrase Bank**: Daily-use conversational phrases with transliteration

---

## 🛠️ Tech Stack

| Frontend       | Backend & Auth | AI & Tools                  |
|----------------|----------------|-----------------------------|
| React + Vite   | Firebase       | Google Dialogflow Chatbot   |
| TailwindCSS    | Firestore DB   | Text-to-Speech APIs         |

---

## 🛠️ System Architecture 
```bash
+-----------------------------------+
|           System Architecture     |
+-----------------------------------+
|                                   |
|  +----------------------------+   |
|  |       Client Side          |   |
|  |  (React Web Application)   |   |
|  |                            |   |
|  |  +----------------------+  |   |
|  |  |  User Interface      |  |   |
|  |  |  - Navbar            |  |   |
|  |  |  - Footer            |  |   |
|  |  |  - LessonsPage       |  |   |
|  |  |  - ProgressTracker   |  |   |
|  |  |  - VideoLesson       |  |   |
|  |  |  - Quiz              |  |   |
|  |  +----------------------+  |   |
|  |                            |   |
|  |  +----------------------+  |   |
|  |  |  State Management    |  |   |
|  |  |  - React Hooks       |  |   |
|  |  |  - Context API       |  |   |
|  |  +----------------------+  |   |
|  +----------------------------+   |
|                                   |
|  +----------------------------+   |
|  |       Backend Services     |   |
|  |         (Firebase)         |   |
|  |                            |   |
|  |  +----------------------+  |   |
|  |  |  Authentication      |  |   |
|  |  |  - Email/Password    |  |   |
|  |  |  - Google Sign-in    |  |   |
|  |  +----------------------+  |   |
|  |  +----------------------+  |   |
|  |  |  Realtime Database   |  |   |
|  |  |  - User Progress     |  |   |
|  |  |  - Lesson Data       |  |   |
|  |  +----------------------+  |   |
|  |                            |   |
|  +----------------------------+   |
|                                   |
|  +----------------------------+   |
|  |       Chatbot Services     |   |
|  |      (Google Dialogflow)   |   |
|  |                            |   |
|  |  +----------------------+  |   |
|  |  |   DialogflowChatbot  |  |   |
|  |  |   - Creating Agent   |  |   |
|  |  |   - Training Agent   |  |   |
|  |  |     (Based on JSON)  |  |   |
|  |  +----------------------+  |   |
|  |                            |   |
|  +----------------------------+   |
|                                   |
+-----------------------------------+
```



## 📁 Project Structure
```bash
hindi-learning-website/
├── public/
│ ├── favicon.ico # Site icon
│ ├── robots.txt
│ └── manifest.json # Web app manifest
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── ProgressTracker.jsx
│ │ ├── VideoLesson.jsx
│ │ ├── Quiz.jsx
│ │ └── ui/ # Custom UI widgets
│ │    ├── tabs.jsx
│ │    └── button.jsx
│ ├── pages/ # Page components
│ │ ├── AlphabetPage.jsx
│ │ ├── Auth.jsx
│ │ ├── Index.jsx # Homepage with ProgressTracker
│ │ ├── LessonsBoardPage.jsx # Lessons with video + quiz
│ │ ├── LessonsPage.jsx
│ │ ├── Login.jsx
│ │ ├── NotFound.jsx
│ │ ├── practice.jsx
│ │ └── Register.jsx
│ ├── data/
│ │ └── lessonsData.js # Static lesson content
│ ├── hooks/
│ │ ├── use-mobile.js 
│ │ └── use-toast.js 
│ ├── App.css
│ ├── App.jsx # Main app logic and routes
│ ├── firebase.js
│ ├── index.css
│ └── main.tsx
├── .env
├── .gitignore
├── components.json
├── firebase.json
├── index.html
├── package-lock.json
├── package.json # Project dependencies
├── tsconfig.app.json 
├── vite.config.ts 
├── tailwind.config.js # Tailwind customization
└── README.md 
```

## 🤸 Quick Start:

Follow these steps to get the project running locally.

### 🔧 Prerequisites

Ensure you have the following installed:
- Git
- Node.js
- npm (Node Package Manager)
- Firebase setup
- Firebase project credentials
- Google Dialogflow
- ZIP file consisting files in JSON format (for training chatbot)

### 📦 Clone the Repository
```bash
git clone https://github.com/SakshamRajpal/Hindi_Learning_website.git
cd Hindi_Learning_website
```


### 📥 Install Dependencies
```bash
npm install
```

### 🔐 Set Up Environment Variables
- Create a .env.local file in the root directory:
```bash
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_DIALOG_AGENT_ID=
Replace the placeholders with your actual Firebase and GoogleDialog credentials.
```

###  ▶️ Run the Development Server
```bash
npm run dev
```
Visit http://localhost:8080 in your browser.

---

## 🙌 Acknowledgements
- Google Dialogflow for chatbot integration
- Firebase for authentication and real-time data handling
- Vercel for deployment

---

## 🤝 Contributing:

- Found a bug or want to contribute?
- Feel free to fork the repo, make changes, and open a pull request.
- ⭐ If you like this project, consider giving it a star!

