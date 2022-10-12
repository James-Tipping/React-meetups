import mongoose from "mongoose";

const connectMongo = async () => {
 await mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME
  })
};

const disconnectMongo = async () => {
  await mongoose.connection.close();
}

export {disconnectMongo};

export default connectMongo;
