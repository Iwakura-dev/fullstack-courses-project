const Router = require("express");
const PostsController = require("../controllers/post.controller");
const router = new Router();
router.post("/posts", (req, res) => PostsController.createPost(req, res));
router.get("/posts", (req, res) => PostsController.getAllPosts(req, res));
router.get("/posts/:id", (req, res) => PostsController.getOnePost(req, res));

module.exports = router;
