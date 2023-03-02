const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  Directors: [
    {
      Name: {
        type: String,
        required: true,
      },
      Domain: {
        type: String,
        required: true,
      },
      Photo: {
        type: String,
        required: true,
      },
      LinkedIn: {
        type: String,
      },
      Github: {
        type: String,
      },
      Instagram: {
        type: String,
      },
    },
  ],
  TeamLeads: [
    {
      Name: {
        type: String,
        required: true,
      },
      Domain: {
        type: String,
        required: true,
      },
      Photo: {
        type: String,
        required: true,
      },
      LinkedIn: {
        type: String,
      },
      Github: {
        type: String,
      },
      Instagram: {
        type: String,
      },
    },
  ],
  DomainLeads: [
    {
      Name: {
        type: String,
        required: true,
      },
      Domain: {
        type: String,
        required: true,
      },
      Photo: {
        type: String,
        required: true,
      },
      LinkedIn: {
        type: String,
      },
      Github: {
        type: String,
      },
      Instagram: {
        type: String,
      },
    },
  ],
  Members: [
    {
      Name: {
        type: String,
        required: true,
      },
      Domain: {
        type: String,
        required: true,
      },
      Photo: {
        type: String,
        required: true,
      },
      LinkedIn: {
        type: String,
      },
      Github: {
        type: String,
      },
      Instagram: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Posts", PostSchema);
