import connectMongo, { disconnectMongo } from "../../utils/connectMongo";
import Meetup from "../../models/meetup";

async function handler(req, res) {
  console.log("Handler activated");
  if (req.method === "POST") {
    try {

      await connectMongo();

      const data = req.body;

      const result = await Meetup.create(data);

      await disconnectMongo();

      res.status(201).json({ message: "Meetup inserted." });

    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  }
}

export default handler;