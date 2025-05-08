import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxlength: 50
    },
    content: {
        type: String,
        required: true,
        maxlength: 300
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: "Publication",
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

commentSchema.methods.toJSON = function() {
    const { __v, _id, ...comment } = this.toObject();
    comment.cid = _id;
    return comment;
}

export default model("Comment", commentSchema);
