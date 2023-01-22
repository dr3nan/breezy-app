import connectMongo from '../../utils/connectMongo';
import Invoice from '../../models/model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  connectMongo();
  switch (method) {
    case 'GET':
      console.log('GET request')
      try {
        const invoice = await Invoice.find({});
        console.log('hello api get data: ', invoice);
        return res.status(200).json(invoice);
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const invoice = await Invoice.create(req.body);
        console.log(invoice);
        res.status(201).json(invoice);
      } catch (e) {
        console.log(e);
        return res.status(400).json(req.body);
      }
      break;
    case 'DELETE':
      try {
        const invoice = await Invoice.findByIdAndDelete(req.query.id);
        return res.status(201).json(invoice);
      } catch (e) {
        console.log(e);
        return res.status(400).json(req.query);
      }
  }
}
