# 🇪🇹 Golden Ethiopia Tour and Travel

### **A Professional MERN Stack Tourism Platform**

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
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (NoSQL Cloud)

---

## 📂 Project Structure

```text
Golden-Ethiopia/
├── backend/                # Server-side logic (Node.js & Express)
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
🚀 Local Setup Instructions
1. Prerequisites
Node.js installed on your machine.

A MongoDB Atlas connection string.

2. Database Configuration
Navigate to the backend folder and create a .env file:

Code snippet

MONGO_URI=your_mongodb_connection_string
PORT=5000
3. Installation & Running
Open two separate terminals:

Terminal 1 (Backend)

Bash

cd backend
npm install
node src/app.js
Terminal 2 (Frontend)

Bash

cd frontend
npm install
npm start
🛡️ Security Best Practices
To follow industry security standards, the .env file containing sensitive database credentials has been excluded from this repository using .gitignore.

© 2026 Golden Ethiopia Project Team
