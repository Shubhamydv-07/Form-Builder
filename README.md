# Form-Builder-App
 
A custom **form builder application** built using the **MERN stack** that allows users to create, preview, and submit forms with dynamic fields. The backend stores data in MongoDB, and the frontend uses Tailwind CSS for a responsive, modern UI.
Here is my website link: https://form-builder-app-1-y7q5.onrender.com
---

## 🚀 Features
- **Dynamic form creation** with multiple question types.
- **Real-time preview** of form changes.
- **Responsive UI** built with Tailwind CSS.
- **MongoDB integration** for storing forms and responses.
- **CORS enabled** backend for frontend-backend communication.
- **Environment variable support** using `.env`.

---

## 🛠️ Tech Stack
### Frontend
- React
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- cors
- nodemon (development)

---

## 📂 Project Structure


Form-Builder/
│── backend/
│ ├── server.js # Main backend entry
│ ├── routes/ # API routes
│ ├── models/ # MongoDB models
│ ├── controllers/ # Route controllers
│ ├── .env # Environment variables (MONGO_URI, PORT, etc.)
│
│── frontend/
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── pages/ # Page components
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── main.jsx
│ ├── tailwind.config.js
│ ├── postcss.config.js
│
│── package.json # Root package.json (if monorepo setup)
