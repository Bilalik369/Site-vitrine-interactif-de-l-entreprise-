import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import {connectDB} from "./lib/db.js"
import blogRoutes from "./route/blogRoutes.js"


dotenv.config();



const app = express();

const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/blog' , blogRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

connectDB()
app.listen(PORT , ()=> {
    console.log(`server is running in PORT ${PORT}`)
})