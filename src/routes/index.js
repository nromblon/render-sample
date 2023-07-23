import { Router } from "express";
import postsRouter from "./postsRouter.js";
import userRouter from "./usersRouter.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page"
    });
});

router.use(userRouter);
router.use(postsRouter);

router.use((req, res) => {
    res.render("error");
});

export default router;