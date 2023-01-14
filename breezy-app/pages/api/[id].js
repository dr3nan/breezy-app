import connectMongo from '../../utils/connectMongo';
import user from '../../models/model';
import User from '../../models/model';

export default async function handler(req, res) {
  await connectMongo();
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(400).json(user);
        }
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(400).json(user);
      }
      break;
    case 'DELETE':
      try {
        const user = await User.findByIdAndDelete(id);
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const user = await User.findOneAndUpdate(id, req.body)
        if (!user) {
          console.log(req.body)
          return res.status(400).json({ success: false });
        }
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
  }
}
