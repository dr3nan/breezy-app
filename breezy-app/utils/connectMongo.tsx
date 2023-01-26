import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

mongoose.set('strictQuery', false);

// const uri = 'mongodb://localhost:27017/breezy-app';
const uri = `${process.env.MONGO_ATLAS_URL}`

const connectMongo = () => mongoose.connect(uri);

export default connectMongo;
