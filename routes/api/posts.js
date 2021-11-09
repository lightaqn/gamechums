const express = require("express");
const router = express.Router();

// Post Model
const Post = require("../../models/Post");

// @route GET api/posts
// @desc GET All posts
//@access public

router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => res.json(posts));
});

// @route POST api/posts
// @desc Create A Post
//@access public

router.post("/", (req, res) => {
  const newPost = new Post({
    name: req.body.name,
  });

  newPost.save().then((post) => res.json(post));
});

// @route DELETE api/posts/:id
// @desc Create A Post
//@access public

router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => post.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
