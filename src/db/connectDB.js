import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async()=>{
    try {
      const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`MONGO DB CONNECTED SUCESSFULLY AT PORT NO: ${connectionInstance.connection.port} WITH DB IS ${connectionInstance.connection.name} AND HOST IS ${connectionInstance.connection.host}`);
      
    } catch (error) {
        console.log("MONGO DB CONNECTION ERROR: ",error.message);
        process.exit(1);
    }
}

export default connectDB;