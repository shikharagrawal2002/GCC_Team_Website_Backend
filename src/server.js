const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
const { MONGO_URI } = require("../config");

// const { model } = require('mongoose');
const router = express.Router();

//posts Model
const Posts = require("../models/Posts");

// @routes GET api/posts
// @desc GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw Error("No Items");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// Routes
// const postsRoutes = require('./Routes/api/posts');

const app = express();

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb Connected!"))
  .catch((err) => console.log(err));

// Use routes
app.use("/.netlify/functions/server", router);

module.exports.handler = serverless(app);
