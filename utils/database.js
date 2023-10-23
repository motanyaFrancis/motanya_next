import mongoose from "mongoose";

let isConnected = false; //tracks the connection

export const connectToDB = async () =>{
    mongoose.set('strictQuery'), true;

    if(isConnected){
        console.log('MongooseDB is already Connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

    } catch (error) {
        console.log(error);
    }
}