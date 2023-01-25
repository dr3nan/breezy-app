import connectMongo from '../../../utils/connectMongo';
import Invoice from '../../../models/model';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectMongo();
  const { method } = req;
  const { PO } = req.query;

  switch (method) {
    case 'GET':
      try {
        console.log('PO in api/pay-invoice/[PO] is: ', Number(PO))
        const invoice = await Invoice.find({ purchaseOrderNumber: PO });
        console.log('invoice of specific puschase order at api/pay-invoice/[id] is: ', invoice)
        if (!invoice) {
          return res.status(404).json({ message: 'Invoice not found' });
        }
        res.status(200);
        res.json(invoice);
        
        // res.send(invoice);
      } catch (error) {
        console.log('error in api/pay-invoice/[PO]', error);
        res.status(400);
        // res.status(400);
      }
      break;
    case 'DELETE':
      try {
        const invoice = await Invoice.findByIdAndDelete(PO);
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const invoice = await Invoice.findOneAndReplace(
          { _id: req.body._id },
          req.body
        );

        if (!invoice) {
          return res.status(400).json({ success: false });
        }
        invoice.paid = true;
        invoice.save();

        res.status(200).json(invoice);
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
  }
}
