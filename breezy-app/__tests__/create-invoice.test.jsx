// TODO: finish implementation
// import mongoose from 'mongoose'
// import Invoice from '../models/model'

// describe('Invoices', () => {
//   beforeAll(async () => {
//     // we connect to the database
//     mongoose.connect(`${process.env.MONGO_ATLAS_URL}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     })
//   })
//   // we create an invoice
//   const invoice = new Invoice({
//     fullName: 'John Doe',
//     address: '123 Main St',
//     phoneNumber: 1234567890,
//     email: 'test@test.com',
//     clientFullName: 'Jane Doe',
//     clientAddress: '123 Main St',
//     clientPhoneNumber: 1234567890,
//     clientEmail: 'test@test.com',
//     purchaseOrderNumber: 123456,
//     description: 'Test Description',
//     rate: 100,
//     date: '2021-01-01',
//     paid: false
//   })

//   it('should create an invoice', async () => {
//     // we save the invoice
//     await invoice.save()
//   })

//   it('should fetch invoices by email', async () => {
//     const mockInvoice = await Invoice.findOne({ email: 'test@test.com' })
//     // we check that the invoice is in the database
//     expect(mockInvoice).toBeTruthy()
//     // we check that the invoice has the correct properties
//     expect(mockInvoice.rate).toEqual(100)
//   })

//   it('should delete an invoice by id', async () => {
//     // we delete the invoice
//     await Invoice.findByIdAndDelete(invoice._id)
//     // we check that the invoice is not in the database
//     expect(await Invoice.findById(invoice._id)).toBeFalsy()
//   })

//   it('should close the connection to the db', async () => {
//     // we close the connection to the database
//     await mongoose.connection.close()
//   })
// })
