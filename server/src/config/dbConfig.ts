import mongoose from "mongoose"
import { DB_URI } from "./dotenv";


export const connectDB = async() => {
    try {
        if (!DB_URI) { // safely ensures DB_URI is not null or undefined and if it is throw an error, without crashing the application.
            throw new Error("Missing database URI in the environment variables");
        }
        await mongoose.connect(DB_URI); // using the ODM mongoose to connect to the database.
        console.log("Database connection is successful");
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error); // checks if error is an instance of the error class, then we extract the message property, if otherwise we convert the error to a readable string
        console.log("Error connecting to database: ", message)
    }
}