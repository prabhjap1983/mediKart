// import mongoose from "mongoose";

// export const connectDB =async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("mongodb connected");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         process.exit(1);
//     }
//     };
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // stop server if DB fails
  }
};
