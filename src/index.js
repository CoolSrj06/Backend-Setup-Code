import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
        app.listen(process.env.PORT || 8000, () =>
        console.log(`Server is running on port ${process.env.PORT}`)
    )
})
.catch((err) =>{
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
})





/*
import express from "express"
const app = express()

;( async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(`${process.env.MongoDB_URL}/${DB_NAME}`)
        app.on("error", (err) =>{ console.log("Error: ", err);
        throw err
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        throw err;
    }

} ) () // semicolon is a preservative approach to insure that semicolon is NOT missed in above statements

*/