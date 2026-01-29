# 🇪🇹 Golden Ethiopia Tour and Travel
**A Professional MERN Stack Tourism Platform**

Golden Ethiopia is a full-stack web application designed to promote Ethiopian tourism. It features a modern, responsive user interface, a dynamic destination gallery, and a backend system integrated with MongoDB Atlas for real-time data management.

---
 
## 🌟 Key Features
* **Dynamic Content:** Testimonials and tour packages are fetched directly from MongoDB.
* **Responsive Gallery:** An interactive showcase of Ethiopia's UNESCO World Heritage sites.
* **Booking System:** Integrated contact and inquiry forms for travelers.
* **Secure Architecture:** Professional-grade security using environment variables (`.env`).

---

## 🛠️ Tech Stack
* **Frontend:** React.js, CSS3, Lucide Icons
* **Backend:** Node.js
* **Database:** MongoDB Atlas (NoSQL Cloud)

---

## 📂 Project Structure

```text
Golden-Ethiopia/
│
├── backend/
│   ├── src/
│   │   ├── config/         # Database connection configuration
│   │   ├── models/         # MongoDB Schemas
│   │   └── routes/         # API endpoints
│   └── .env                # Private credentials (LOCAL ONLY)
├── frontend/               # Client-side UI (React.js)
│   ├── src/
│   │   ├── components/     # UI Header, Footer
│   │   └── pages/          # Home, Gallery, About, Contact, Packages
├── .gitignore              # Files ignored by Git (node_modules, .env)
└── README.md               # Project documentation
```
---
🚀 Local Setup Instructions
## 🚀 Local Setup Instructions

### 1. Prerequisites
* **Node.js** - Ensure Node.js is installed on your machine.
* **MongoDB Atlas** - You will need a valid MongoDB Atlas connection string.

### 2. Database Configuration
Navigate to the `backend` folder and create a `.env` file:
Code snippet

```text
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
### 3. Installation & Running
Open two separate terminals:

* **Terminal 1 (Backend)**

Bash

```text
cd backend
npm install
node src/app.js
```
* **Terminal 2 (Frontend)**

Bash

```text
cd frontend
npm install
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
