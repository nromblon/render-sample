import { Router } from "express";
import { Post } from "../models/post.js";
import { User } from "../models/user.js";

const postsRouter = Router();

postsRouter.get("/posts", async (req, res) => {
    const users = await User.find({}).lean().exec();
    const posts = await Post.find({}).populate('user').lean().exec();
    console.log(posts);
    res.render("posts", {
        title:"Posts",
        users: users,
        posts: posts,
        helpers: {
            toDate: (date) => {return new Date(date).toString();}
        }
    });
});

postsRouter.post("/posts", async (req, res) => {
    console.log(req.body);
    const newPost = new Post({
        user: req.body.user,
        subject: req.body.subject,
        body: req.body.content,
        dateTime: new Date(req.body.epoch)
    });

    newPost.save().then(results => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.render("error");
    });
});

export default postsRouter;