import express from "express"
import {createArticle , getAllArticle} from "../controllers/blogController.js"

const router = express.Router();

router.post("/" , createArticle)
router.get("/" , getAllArticle)

export default router