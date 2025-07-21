import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mishraatmaj:ktWDgpFXEwrXYRJB@cluster0.e2dg8xt.mongodb.net/Taskflow"
    )
    .then(() => console.log("DB CONNECTED"));
};
