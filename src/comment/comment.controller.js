import Comment from "./comment.model.js";
import Publication from "../publication/publication.model.js";

export const createComment = async (req, res) => {
    try {
        const data = req.body;
        const comment = await Comment.create(data);
        await Publication.findByIdAndUpdate(data.publication, { $push: { comments: comment._id } });
        return res.status(201).json({
            message: "Comment has been created",
            comment
        });
    } catch (err) {
        return res.status(500).json({
            message: "Comment creation failed",
            error: err.message
        });
    }
};
