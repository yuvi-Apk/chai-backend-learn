import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import connectDB from "./db/connectDB.js";
import { app } from "./app.js";
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGO DB connection Failed !!! ", error);
  });
