import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/breezy-app';

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
