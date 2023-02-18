// connect mongodb database
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.MONGO_URI;

const connect = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(url, {});
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connect;
