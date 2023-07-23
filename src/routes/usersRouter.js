import { Router } from "express";
import { User } from "../models/user.js";

const userRouter = Router();

userRouter.get("/users", async (req, res) => {
    const users = await User.find({}).lean().exec();
    res.render("users", {
        title: "Users Page",
        users: users
    });
});


userRouter.post("/createUser", (req, res) => {
    console.log("/createUser request received:");
    console.log(req.body);
    const myUser = new User({
        username: req.body.username,
        color: req.body.favColor
    });
    myUser.save().then((result) => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
    
});

export default userRouter;
