# 🎓 Uni-SkillsMart

Uni-SkillsMart is a campus-based skill-sharing platform that empowers verified students to showcase their talents, offer services, and connect with fellow students for safe, easy bookings—from tutoring to hairstyling and more.

---

## 🚀 Project Goals

- Empower students to monetize their skills
- Simplify skill sourcing within campus communities
- Ensure safety through student verification
- Enable seamless booking, messaging, and reviews

---

## 🧰 Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/atlas/database)

---

## 👥 User Roles

- **Student Provider (SP)**: Offers services, manages profile, uploads portfolio, schedules bookings
- **Student Client (SC)**: Searches providers, initiates bookings, gives reviews
- **Admin**: Verifies users, approves bookings, resolves conflicts, manages expired accounts

---

## 📦 Features

### 🧑‍💼 Admin Features
- Student ID/document verification
- Approve or reject booking agreements
- Conflict resolution dashboard (view reports, chat logs, booking history)
- Manage expired accounts based on graduation dates
- View platform analytics (active users, top-rated providers)
- Filter bookings by status: Pending, Approved, Completed, Reported

---

### 🧑‍🎓 Student Provider Features
- Signup and role selection
- Create and edit profile
- List up to **2 skills** from categorized options
- Upload portfolio (max 5 files, replaceable)
- Upload booking agreement (service, amount, location, date/time)
- Receive bookings and schedule dates
- In-app messaging with clients
- Mark bookings as “Done” after service completion
- Receive ratings and reviews
- Notification system for bookings, messages, and reviews

---

### 🧑‍💻 Student Client Features
- Signup and role selection
- Create and edit profile
- Search and filter providers by skill, gender, rating
- Favorite providers for quick access
- Review booking agreement and give consent
- In-app messaging with providers
- Rate and review providers after service
- Report issues with bookings (no-show, poor service, etc.)
- Notification system for booking updates and messages

---

### 🔐 Verification & Safety
- Upload student ID or documentation
- Admin review and approval
- Verified badge on profile
- Graduation date tracking and account expiration
- Re-verification flow for extended student status (e.g., ASUU strike)

---

### 📦 Booking System
- Agreement upload by provider
- Consent by client
- Admin approval
- Booking appears on both dashboards
- Status tracking: Pending → Approved → In Progress → Completed
- Reporting flow for disputes

---

### 💬 Messaging System
- Lightweight in-app chat
- Optional file or image sharing (e.g., portfolio previews)
- Message notifications

---

### ⭐ Ratings & Reviews
- Clients rate providers post-service
- Reviews visible on provider profiles
- Average rating displayed in search results

---

### Admin Tools
- View all bookings and user profiles
- Manage reported issues
- Track expired accounts
- View platform metrics

---

## 🗂️ Folder Structure
uni-skillsmart/ 
├── client/       
### Next.js + Tailwind + Redux 
├── server/        
### Express.js + MongoDB 
└── README.md

---

## 🛠️ Setup Instructions

### Frontend
```bash
cd client
npm install
npm run dev

```
### Backend
```bash
cd server
npm install
npm run dev

```

## 📌 Roadmap
See **GitHub Projects** for daily tasks and milestones.



