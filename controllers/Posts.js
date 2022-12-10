
import mongoose from 'mongoose'
import Posts from '../models/Posts.js';

export const Pimages = async (req, res) => {
    const postImageData = req.body;
    const userId = req.userId;
    const postImage = new Images({ ...postImageData, userId});
    try {
        await postImage.save();
        res.status(200).json("Posted a Image successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post a new Image")        
    }
}

export const getAllImage = async (req, res) => {
    try {
        const ImageList = await Posts.find();
        res.status(200).json(ImageList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 

export const deletePost = async (req, res) => {
    const { id:_id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('image unavailable...');
    }

    try {
        await Images.findByIdAndRemove( _id );
        res.status(200).json({ message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}