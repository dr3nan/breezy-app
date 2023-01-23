import mongoose from 'mongoose';
import Invoice from '../models/model';

describe('create invoice', () => {

  beforeAll(async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/breezy-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    await Invoice.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  })

  it('should create an invoice in db', async () => {
    const invoice = new Invoice({
      fullName: 'John Doe',
      address: '123 Main St',
      phoneNumber: 1234567890,
      email: 'test@test.com',
      clientFullName: 'Jane Doe',
      clientAddress: '123 Main St',
      clientPhoneNumber: 1234567890,
      clientEmail: 'test@test.com',
      purchaseOrderNumber: 123456,
      description: 'Test Description',
      rate: 100,
      date: '2021-01-01',
      paid: false
    });

    await invoice.save();

    const mockInvoice = await Invoice.findOne({ email: 'test@test.com' });

    expect(mockInvoice).toBeTruthy();
    expect(mockInvoice.rate).toEqual(100);
  });
});