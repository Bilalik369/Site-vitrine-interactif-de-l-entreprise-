import express from "express"
import {createArticle , getAllArticle, getAllArticleById , updateArticle} from "../controllers/blogController.js"

const router = express.Router();

router.post("/" , createArticle)
router.get("/" , getAllArticle)
router.get("/:id" , getAllArticleById)
router.put("/:id" , updateArticle)

export default router