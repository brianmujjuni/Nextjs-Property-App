import mongoose from "mongoose";
let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //if the database is already connected,dont connect again
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }

  //connect to db
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('database connected successfuly')
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
