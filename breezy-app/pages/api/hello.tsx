import connectMongo from '../../utils/connectMongo';
import Invoice from '../../models/model';

export default async function handler(req, res) {
  const { method } = req;
  await connectMongo();
  switch (method) {
    case 'GET':
      console.log('GET request')
      try {
        const invoice = await Invoice.find({});
        console.log('hello api get data: ', invoice);
        await res.status(200).json(invoice);
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const invoice = await Invoice.create(req.body);
        console.log(invoice);
        await res.status(201).json(invoice);
      } catch (e) {
        console.log(e);
        await res.status(400).json(req.body);
      }
      break;
    case 'DELETE':
      try {
        const invoice = await Invoice.findByIdAndDelete(req.query.id);
        await res.status(201).json(invoice);
      } catch (e) {
        console.log(e);
        await res.status(400).json();
      }
  }
}
