import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'
import dotenv from "dotenv";

dotenv.config({
    path: '../env'
})

const connectDB = async() =>{
    try {
        const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database successfully connected!!")
        // console.log(connnectionInstance)
        console.log(`${connnectionInstance.connection.host}`)
    } catch (error) {
        console.log("Database Error");
        console.error(error)
        process.exit(1);
    }
}

export default connectDB