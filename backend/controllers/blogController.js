import Blog from "../models/Blog.js";



export const createArticle = async(req , res)=>{
    try {
        const newBlog = new Blog(req.body)
        const saved = await newBlog.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}