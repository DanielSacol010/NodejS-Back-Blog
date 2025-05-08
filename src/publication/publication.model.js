import { model, Schema } from "mongoose";

const publicationSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: [50, "Title is too long"],
    },
    content: {
        type: String,
        required: true,
        maxlength: [250, "Content is too long"],
    },
    course: {
        type: String,
        required: true,
        enum: ["Taller III", "Tecnología III", "Práctica Supervisada"]
    }
},
{
    versionKey: false,
    timestamps: true
})

publicationSchema.methods.toJSON = function(){
    const {__v, _id, ...publication} = this.toObject()
    publication.pid = _id
    return publication
}

export default model("Publication", publicationSchema)