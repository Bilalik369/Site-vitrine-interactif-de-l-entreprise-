import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import blogRoutes from "./route/blogRoutes.js"


dotenv.config();



const app = express();

const PORT = process.env.PORT
app.use(express.json())
app.use('/api/blog' , blogRoutes)

connectDB()
app.listen(PORT , ()=> {
    console.log(`server is running in PORT ${PORT}`)
})