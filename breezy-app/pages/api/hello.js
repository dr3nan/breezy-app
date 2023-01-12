// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '../../utils/connectMongo'
import Test from '../../models/model'

export default async function handler(req, res) {
  const { method } = req;

  await connectMongo();
  switch (method) {
    case 'GET':
      try {
        const test = await Test.find({});
        res.status(200).json(test);

      } catch (e) {
        res.status(400).json({ success: false });
      }
      break
      case 'POST':
        try {
          const test = await Test.create(req.body)
          res.status(201).json(test)
        } catch(e) {
          console.log(e)
          res.status(400).json()
        }
        break;
        case 'DELETE':
        try {
          console.log(req.query.id)
          const test = await Test.findByIdAndDelete(req.query.id)
          console.log(req.query)
          res.status(201).json(test)
        } catch(e) {
          console.log(e)
          res.status(400).json()
        }
  }
}

