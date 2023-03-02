const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

//posts Model
const Posts = require('../../models/Posts');

// @routes GET api/posts
// @desc GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw Error('No Items');
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @routes GET api/posts/:id
// @desc GET one posts\
router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!posts) throw Error('No Post');
    res.status(200).json(post);
    console.log(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @routes POST api/posts
// @desc Create an post
router.post('/', async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    const post = await newPost.save();
    if (!post) throw Error('Something went wrong while saving the post!');

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// @routes DELETE api/posts/:id
// @desc DELETE a post
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  Posts.findByIdAndRemove(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found Tutorial with id ' + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error retrieving Tutorial with id=' + id });
    });
});

// @routes UPDATE api/posts/:id
// @desc UPDATE a post
router.patch('/:id', async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error('Something went wrong while updating the post!');
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
