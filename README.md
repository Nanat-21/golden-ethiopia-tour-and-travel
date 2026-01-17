# golden-ethiopia-tour-and-travel
# 🇪🇹 Golden Ethiopia Tour and Travel
**A Professional MERN Stack Tourism Platform**

Golden Ethiopia is a full-stack web application designed to promote Ethiopian tourism. It features a modern, responsive user interface, a dynamic destination gallery, and a backend system integrated with MongoDB Atlas for real-time data management.

---

## 🌟 Key Features
- **Dynamic Content:** Testimonials and tour packages are fetched directly from MongoDB.
- **Responsive Gallery:** An interactive showcase of Ethiopia's UNESCO World Heritage sites.
- **Booking System:** Integrated contact and inquiry forms for travelers.
- **Secure Architecture:** Professional-grade security using environment variables (`.env`) to protect database credentials.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, CSS3 (Custom Styles), Lucide Icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (NoSQL Cloud Database)
- **Environment Management:** Dotenv

---

## 📂 Project Structure
```text
Golden-Ethiopia/
├── backend/                # Server-side logic (Node.js & Express)
│   ├── src/
│   │   ├── config/         # Database connection configuration
│   │   ├── models/         # MongoDB Schemas (Gallery, Contact, etc.)
│   │   └── routes/         # API endpoints
│   └── .env                # Private credentials (LOCAL ONLY)
├── frontend/               # Client-side UI (React.js)
│   ├── src/
│   │   ├── components/     # UI Header, Footer
│   │   └── pages/          # Home, Gallery, About, Contact, Packages
├── .gitignore              # Instructions to Git to ignore node_modules and .env
└── README.md               # Project documentation

🚀 Local Setup Instructions
Follow these steps to run the project on your machine:

1. Prerequisites
Node.js installed

MongoDB Atlas account

2. Database Configuration
Navigate to the backend folder and create a file named .env.

Add your MongoDB connection string and port:

Code snippet

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/golden_ethiopia
PORT=5000
3. Installation
Open two terminals to run the backend and frontend simultaneously:

Terminal 1 (Backend):

Bash

cd backend
npm install
node src/app.js
Terminal 2 (Frontend):

Bash

cd frontend
npm install
npm start
🛡️ Security Best Practices
To follow industry security standards, the .env file containing sensitive database credentials has been excluded from this repository using .gitignore. For the purpose of evaluation, the specific connection string has been provided in the submission comments.

© 2026 Golden Ethiopia Project Team


---

### How to push this to GitHub:
Since we just fixed your branch issues, simply run these three commands in your main folder:

1. **Stage the file:**
   ```powershell
   git add README.md
Commit it:

PowerShell

git commit -m "Docs: Create unified professional README"
Push it:

PowerShell

git push origin main