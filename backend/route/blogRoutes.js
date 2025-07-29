import express from "express"
import {createArticle} from "../controllers/blogController.js"

const router = express.Router();

router.post("/" , createArticle)

export default router