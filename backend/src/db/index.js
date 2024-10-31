import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`,
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
}

export default dbConnect;