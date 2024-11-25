import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('connect DB suc')
  } catch (err) {
    console.log(err)
    console.log(process.env.MONGO)
  }
}

export default connectDB
