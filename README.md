# KodeKalp Gmail Verfication

## Overview

The Kodekalp is a Full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application includes user authentication, email verification, and a dashboard for users to view their details. This README provides instructions for setting up the project, running it locally, and an overview of the system.

## Table of Contents

- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [How to Run the App Locally](#how-to-run-the-app-locally)
- [System Overview](#system-overview)
- [Contributing](#contributing)
- [License](#license)

## Setup Instructions

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (or access to MongoDB Atlas)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/RehanShaikh007/Kodekalp_Assignment.git
cd Kodekalp_Assignment
```

### Frontend Setup

- Navigate to the frontend directory:
```bash
cd frontend
```
- Install frontend dependencies:
```bash
npm install
```
- Create a .env file in the frontend directory and add the following environment variables:
```bash
VITE_API_URL=http://localhost:5000/api
```
- Run the frontend development server:
```bash
npm run dev
```

### Backend Setup
- Navigate to the backend directory:

```bash
cd ../backend
```
- Install backend dependencies:
```bash
npm install
```
- Create a .env file in the backend directory and add the following environment variables:

```bash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```
- Run the backend server:
```bash
npm start
```
## How to Run the App Locally

- Start the backend server as described in the Backend Setup section.

- Start the frontend server as described in the Frontend Setup section.

- Open your browser and navigate to http://localhost:5173 to view the application.

## System Overview
### Features
- User Authentication: Users can sign up, log in, and log out. Email verification is required upon signup.
- Dashboard: After logging in, users are redirected to a dashboard where they can view their details.
- Error Handling: Notifications are displayed using Toastify for success and error messages.
### Components
- Frontend: Developed using React.js and Tailwind CSS for styling. It includes components for signup, login, and user dashboard.
- Backend: Built with Node.js and Express.js. It handles user authentication, email verification, and communicates with MongoDB for data storage.
- Database: MongoDB is used for storing user data and other application-related information.
### Routes
- Frontend Routes:

   /signup: Signup page\
   /login: Login page\
   /dashboard: User dashboard
- Backend Routes:

  POST /api/auth/signup: User signup\
  POST /api/auth/login: User login\
  GET /api/auth/verify/:token: Email verification
## Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes. Make sure to follow the existing coding style and include appropriate tests for new features.

## License
This project is licensed under the MIT License.
