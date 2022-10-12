import mongoose from "mongoose";

const meetupSchema = new mongoose.Schema({
  title: String,
  image: String,
  address: String,
  description: String
});

const Meetup = mongoose.models.meetup || mongoose.model("meetup", meetupSchema);

export default Meetup;