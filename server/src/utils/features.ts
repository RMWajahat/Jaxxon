import mongoose, { Document } from "mongoose";
export const connectDB = () => {
    mongoose
      .connect('mongodb://0.0.0.0:27017/', {
        dbName: "Ecommerce",
      })
      .then((c) => console.log(`DB Connected to ${c.connection.host}`))
      .catch((e) => console.log(e));
  };