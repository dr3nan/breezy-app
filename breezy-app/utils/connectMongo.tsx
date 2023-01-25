import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

// const uri = 'mongodb://localhost:27017/breezy-app';
const uri = `${process.env.MONGO_ATLAS_URL}`

const connectMongo = () => mongoose.connect(uri);

export default connectMongo;
