import express, { Request, Response } from "express"
import { PORT } from "./config/dotenv";
import { connectDB } from "./config/dbConfig";

const app = express(); // Creates an instance of an Express application

const startServer = async() => {

    await connectDB(); // calls my database connection handler first. This ensures your app doesn’t start accepting requests before the DB is ready.

    app.use(express.json()); // Enables the backend to read JSON data from forms, APIs, or frontend apps
    app.get("/", (req:Request, res:Response) => {
        res.send("Uni-SkillsMart server is live!")
    });

    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    })
}

startServer();