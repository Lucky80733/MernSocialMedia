import express from 'express';
import mongoose from 'mongoose';

import PostCalendarMessage from '../models/postCalendar.js';

const router = express.Router();

export const getCalendarPosts = async (req, res) => { 
    try {
        const PostCalendarMessage = await PostCalendarMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCalendarPost = async (req, res) => {
    const { title, selectedDate,selectedTime } = req.body;

    const newPostCalendarMessage = new PostCalendarMessage({ title,selectedDate,selectedTime })

    try {
        await newPostCalendarMessage.save();

        res.status(201).json(newPostCalendarMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export default router;