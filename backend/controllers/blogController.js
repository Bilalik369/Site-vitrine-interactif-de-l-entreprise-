import e from "express";
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

export const getAllArticleById = async (req , res)=>{
    try {
        const blog = await Blog.findById(req.params.id)
        if(!blog){
            return res.status(400).json({msg : "blog non trouve"})
        }
        res.json(blog)
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

export const updateArticle  = async(req , res)=>{
    try {
        const updated = await Blog.findByIdAndUpdate(req.params.id)
        if(!updated){
            return res.status(400).json({msg : "blog not found"})
        }
        res.status(200).json(updated)
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

export const deleteArticle = async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };