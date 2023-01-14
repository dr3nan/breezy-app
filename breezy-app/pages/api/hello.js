// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '../../utils/connectMongo'
import User from '../../models/model'

export default async function handler(req, res) {
  const { method } = req;

  await connectMongo();
  switch (method) {
    case 'GET':
      try {
        const user = await User.find({});
        res.status(200).json(user);

      } catch (e) {
        res.status(400).json({ success: false });
      }
      break
      case 'POST':
        try {
          
          const user = await User.create(req.body)
          res.status(201).json(user)
        } catch(e) {
          console.log(e)
          res.status(400).json(req.body)
        }
        break;
        case 'DELETE':
        try {
          console.log(req.query.id)
          const user = await User.findByIdAndDelete(req.query.id)
          res.status(201).json(user)
        } catch(e) {
          console.log(e)
          res.status(400).json()
        }
  }
}

