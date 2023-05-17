import mongoose, { mongo } from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected){
       console.log('MongoDB is already connected') 
    }else{
        try {
            await mongoose.connect(process.env.MONGODB_URI,{
                dbName: "promptodo",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
    
            isConnected = true
            console.log("MongoDB Connected")
        } catch (error) {
            console.log(error)
        }
    }

}