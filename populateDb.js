import "dotenv/config";
import mongoose from "mongoose";
import { User } from "./src/models/user.js";
import { connect } from "./src/models/db.js";


connect().then((connection) => {

    User.create({username: "neilromblon234"});
    User.create({username: "neilromblon234"});
    User.create({username: "neilromblon234"});
    User.create({username: "neilromblon234"});
    User.create({username: "neilromblon234"});

    
    console.log("user created");
});
