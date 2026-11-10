# 🚀 Full-Stack User Management Web Application

A full-stack web application built using **React.js** for the frontend and **Node.js** with **Express.js** for the backend, integrated with a **MongoDB** database. 

This project implements a complete RESTful API architecture supporting all CRUD operations (Create, Read, Update, Delete) to manage user details efficiently, including retrieving individual user records dynamically by their unique ID.

---

## ✨ Features

- **Full CRUD Operations**:
  - ➕ **Create (POST)**: Register/add new users with name, email, and phone number.
  - 📖 **Read (GET)**: Fetch and display a complete list of users or retrieve detailed user information by unique User ID.
  - ✏️ **Update (PUT/PATCH)**: Edit and update existing user records seamlessly.
  - 🗑️ **Delete (DELETE)**: Remove user accounts from the database.
- **RESTful API**: Custom-built REST API endpoint architecture built with Express.js.
- **Frontend & Backend Integration**: Seamless asynchronous HTTP communication between React components and the REST server (via Axios / Fetch API).
- **Persistent Storage**: Data persistence powered by MongoDB and Schema modeling via Mongoose.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework/Library**: React.js
- **Styling**: CSS3 / Bootstrap / Tailwind CSS *(Update as per your project)*
- **HTTP Client**: Axios / Fetch API

### **Backend**
- **Runtime Environment**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB & Mongoose ODM

---

## 📂 Project Structure

```text
root-directory/
├── client/                  # React Frontend App
│   ├── src/
│   │   ├── components/      # React UI Components
│   │   ├── App.js           # Main Application Routing / Component
│   │   └── index.js         # Entry Point
│   └── package.json
│
└── server/                  # Node.js + Express Backend App
    ├── models/              # MongoDB/Mongoose Schemas (User.js)
    ├── routes/              # Express API Routes (userRoutes.js)
    ├── controllers/         # Request Handler Logic
    ├── server.js            # Express Server Setup & DB Connection
    └── package.json
