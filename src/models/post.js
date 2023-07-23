import { Schema, SchemaTypes, model } from "mongoose";

const postSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'user',
        require: true
    },
    subject: {
        type: SchemaTypes.String,
        require: true
    },
    body: {
        type: SchemaTypes.String
    },
    dateTime: {
        type: SchemaTypes.Date,
        require: true
    }
});

export const Post = model("post", postSchema);