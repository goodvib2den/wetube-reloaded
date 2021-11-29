import mongoose from "mongoose";

// 하나의 구조를 가질 수 있게끔 db를 구조하는 것이 아래의 한 블록
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
