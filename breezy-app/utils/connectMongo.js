import mongoose from 'mongoose';

const uri = "mongodb://localhost:27017/";


const connectMongo = async () => mongoose.connect('mongodb://localhost:27017/breezy-app');

export default connectMongo;

// async function run() {
//   try {
//     await mongoose.connect(uri);
//     console.log("connected succesfully!!");
//   } catch (err) {
//     console.log(err);
//   }
// }
// run();