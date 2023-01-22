import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const uri = 'mongodb://localhost:27017/breezy-app';

mongoose.connect(uri, () => {
  console.log('Breezy db connected');
});

export default mongoose;
