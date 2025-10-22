# Uni-SkillsMart Backend

This is the server-side application for Uni-SkillsMart, built with **Node.js**, **Express**, and **TypeScript**, connected to **MongoDB** via **Mongoose**. It handles authentication, booking logic, user verification, and admin workflows.

---

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Cors](https://www.npmjs.com/package/cors)

---

## Folder Structure
server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
│   └── services/
│   └── shared/
│   └── utils/
│   └── validations/
│   └── server.ts
├── env
├── gitignore
├── package.json
├── tsconfig.json
└── README.md

---

## 🛠️ Setup

```bash
cd server
npm install
npm run dev

```
---

## Features
- Secure JWT authentication using HTTP-only cookies
- Student ID verification flow
- Booking agreement upload and approval
- Role-based access control
- Conflict reporting and resolution
- MongoDB schema for users, bookings, reports
- RESTful API endpoints for frontend consumption

---

## Notes
- Mongoose ODM used for schema modeling
- Environment variables stored in .env
- CORS enabled for frontend-backend communication


