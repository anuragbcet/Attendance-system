# Live Attendance System – Backend

A real-time attendance system built with **Node.js**, **Express**, **MongoDB**, and **WebSockets**. This project demonstrates authentication, role-based access control, class management, and live attendance tracking using a single active WebSocket session.

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **WebSocket (`ws`)**
* **JWT** – authentication
* **bcrypt** – password hashing
* **Zod** – request validation

---

## ✨ Features

* User authentication (Signup, Login, Me)
* Role-based access control (Teacher / Student)
* Class CRUD operations (Teacher only)
* Live attendance via WebSocket
* Attendance persistence to MongoDB
* Single active class session (no rooms)

---

## 📌 Assumptions & Constraints

* Only **one class session** can be active at a time
* All WebSocket messages are broadcast to **all connected clients**
* Teachers start/stop attendance sessions
* Students mark attendance in real time

---

## ▶️ Running the Project

### 1. Clone Repository

```bash
git clone https://github.com/anuragbcet/Attendance-system.git
cd live-attendance-backend
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/attendance
JWT_SECRET=supersecret
```

### 4. Start Server

```bash
bun run index.ts
```

---

## 🧪 API Testing

* Use **Postman** for REST APIs
* Use browser console or WebSocket client for live attendance

---

## 🚀 Future Improvements

* Multiple class sessions (room-based WebSocket)
* Attendance per date/time
* Admin role
* Analytics & reports

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Built as a backend + WebSocket system design exercise.

