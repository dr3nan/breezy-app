import connectMongo from '../../../utils/connectMongo';
import Test from '../../../models/model';


export default async function addTest(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const test = await Test.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

export default async function getTest(req,res) {
  try {
    await connectMongo()
    const test = await Test.find()
    console.log('working!')
  } catch(e) {
    console.log(e)
  }
}