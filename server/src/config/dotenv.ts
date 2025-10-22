import dotenv from "dotenv"

dotenv.config(); // Loads .env variables into process.env so they can be accessed within the application.

export const PORT = process.env.PORT || 5000;
export const DB_URI = process.env.DB_URI;