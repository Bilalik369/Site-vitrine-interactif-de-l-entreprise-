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

export const getAllArticle = async(req , res)=>{
    try {
        const blogs = await Blog.find().sort({createdAt : -1})
        res.json(blogs)
    } catch (error) {
        res.status(500).json({error :error.message})
    }
}