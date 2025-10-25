import mongoose from "mongoose";

const connectToDB = async (MONGO_URI) => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    console.log("mongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
