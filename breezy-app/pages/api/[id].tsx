import connectMongo from '../../utils/connectMongo';
import Invoice from '../../models/model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo();
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const invoice = await Invoice.findById(id);
        if (!invoice) {
          return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200);
        res.json(invoice);
      } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Server error' });
      }
      break;
    case 'DELETE':
      try {
        const invoice = await Invoice.findByIdAndDelete(id);
        if (!invoice) {
          return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200);
        res.json({ message: 'Invoice deleted' });
      } catch (error) {
        console.error(error);
        res.status(500)
        res.json({ message: 'Server error' });
      }
      break;
    case 'PUT':
      try {
        const invoice = await Invoice.findOneAndUpdate(
          { _id: req.body._id },
          { new: true }
        );

        if (!invoice) {
          return res.status(404).json({ message: 'Invoice not found' });
        }
        invoice.paid = true;
        await invoice.save();

        res.status(200)
        res.json(invoice);
      } catch (error) {
        console.error(error);
        res.status(500)
        res.json({ message: 'Server error◊' });
      }
  }
}
