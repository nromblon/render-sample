import { Schema, SchemaTypes, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: SchemaTypes.String,
        require: true
    },
    color: {
        type: SchemaTypes.String,
        require: true,
        validate: {
            validator: (val) => {return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(val) },
            message: "Color value provided is not a valid Hexadecimal Color Code!"
        }
    }
});

export const User = model("user", userSchema);