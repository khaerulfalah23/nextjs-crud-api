import mongoose, { Schema } from "mongoose";

const topicShcema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicShcema);

export default Topic;