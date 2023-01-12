import connectMongo from '../../utils/connectMongo';
import Test from '../../models/model';

export default async function handler(req, res) {
  await connectMongo();
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const test = await User.findById(id);
        if (!test) {
          console.log(test);
          return res.status(400).json(test);
        }
        res.status(200).json(test);
      } catch (error) {
        console.log(error);
        res.status(400).json(test);
      }
      break;
    case 'DELETE':
      try {
        const test = await User.findByIdAndDelete(id);
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const test = await User.findOneAndUpdate(id, req.body)
        if (!test) {
          console.log(req.body)
          return res.status(400).json({ success: false });
        }
        res.status(200).json(test);
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
  }
}
