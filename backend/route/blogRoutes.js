import express from "express"
import {createArticle , getAllArticle, getAllArticleById} from "../controllers/blogController.js"

const router = express.Router();

router.post("/" , createArticle)
router.get("/" , getAllArticle)
router.get("/:id" , getAllArticleById)

export default router