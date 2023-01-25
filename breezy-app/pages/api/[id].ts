import connectMongo from '../../utils/connectMongo';
import Invoice from '../../models/model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongo();
  } catch (error) {
    console.log('error in connectMongo', error)
  }

  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const response = await Invoice.find({ userId: id });
        console.log('[id] / GET invoice response body', response);
        if (!response) {
          return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200);
        res.json(response);
      } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ message: 'Server error' });
      }
      break;
    case 'DELETE':
      try {
        const response = await Invoice.findByIdAndDelete(id);
        console.log('[id] / DELETE invoice response body', response.body);
        if (!response) {
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
        const response = await Invoice.findOneAndUpdate(
          { _id: req.body._id },
          { new: true }
        );
        console.log('[id] / PUT invoice response body', response.body);

        if (!response) {
          return res.status(404).json({ message: 'Invoice not found' });
        }
        response.paid = true;
        await response.save();

        res.status(200)
        res.json(response);
      } catch (error) {
        console.error(error);
        res.status(500)
        res.json({ message: 'Server error◊' });
      }
  }
}
