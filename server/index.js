import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/routes.js'

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(cors())

const PORT = Number(process.env.PORT) || 5000
const MONGO_URL = process.env.MONGO_URL

    // Connect to MongoDB
   try {
        await mongoose.connect(MONGO_URL)

        console.log("database connected!!")
    } catch (error) {
        console.error("failed to connect", error)
    }

// Routes
app.use("/api", userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})