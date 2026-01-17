🇪🇹 Golden Ethiopia Tour and Travel

MERN Stack Tourism Web Application

1. Project Overview

Golden Ethiopia Tour and Travel is a web-based tourism platform developed to promote Ethiopia’s cultural, historical, and natural attractions.
The system provides travelers with information about destinations, tour packages, galleries, and inquiry forms using a modern full-stack web architecture.

This project is developed as an academic MERN stack project and follows best practices in frontend–backend separation and secure configuration.

2. Objectives

To design a modern and responsive tourism website

To apply React for component-based frontend development

To implement a backend API using Node.js and Express

To integrate MongoDB Atlas for data storage

To follow secure development practices using environment variables

3. Key Features

Responsive user interface built with React and CSS

Multi-page navigation using React Router

Dynamic pages: Home, About, Packages, Gallery, Contact

Backend API structure ready for expansion

MongoDB Atlas integration for future dynamic content

Secure handling of sensitive credentials using .env

4. Technologies Used
Frontend

React.js

React Router DOM

CSS3

Lucide Icons / Font Awesome

Backend

Node.js

Express.js

Database

MongoDB Atlas (Cloud NoSQL Database)

Tools

Git & GitHub

npm

VS Code

5. Project Structure
Golden-Ethiopia/
│
├── backend/
│   ├── src/
│   │   ├── config/        # Database connection setup
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API routes
│   │   └── app.js         # Express app entry point
│   ├── .env               # Environment variables (not committed)
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── images/        # Static images
│   ├── src/
│   │   ├── components/    # Header, Footer
│   │   ├── pages/         # Home, About, Packages, Gallery, Contact
│   │   ├── styles/        # CSS files
│   │   ├── App.jsx        # Routing and layout
│   │   └── index.js       # React entry point
│   └── package.json
│
├── .gitignore
└── README.md

6. Installation and Setup
6.1 Prerequisites

Node.js (v16 or later)

npm

MongoDB Atlas account

6.2 Backend Setup

Navigate to the backend directory:

cd backend


Install dependencies:

npm install


Create a .env file inside the backend folder:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/golden_ethiopia
PORT=5000


Start the backend server:

node src/app.js

6.3 Frontend Setup

Navigate to the frontend directory:

cd frontend


Install dependencies:

npm install


Start the React development server:

npm start


The application will run at:

http://localhost:3000

7. Security Considerations

Sensitive information such as database credentials is stored in .env

The .env file is excluded from version control using .gitignore

This follows industry-standard security practices

8. Future Enhancements

Dynamic data fetching from MongoDB

User authentication and admin dashboard

Online booking and payment integration

Image upload and management

Deployment to cloud platforms (Vercel / Render)

9. Authors

Golden Ethiopia Project Team
Software Engineering Students
Addis Ababa University

10. License

This project is developed for academic purposes only.

© 2026 Golden Ethiopia Tour and Travel