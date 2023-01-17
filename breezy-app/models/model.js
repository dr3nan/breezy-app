import { Schema, model, models } from 'mongoose';

const invoiceSchema = new Schema({
  fullName: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },

  clientFullName: {
    type: String,
    required: false,
  },
  clientAddress: {
    type: String,
    required: false,
  },
  clientPhoneNumber: {
    type: Number,
    required: false,
  },
  clientEmail: {
    type: String,
    required: false,
  },
  purchaseOrderNumber: {
    type: Number,
    required: false,
  },
  item1: {
    type: String,
    required: false,
  },
  item2: {
    type: String,
    required: false,
  },
  item3: {
    type: String,
    required: false,
  },
  rate: {
    type: Number,
    required: false,
  },

  date: {
    type: Date,
    required: false,
  },
  paid: {
    type: Boolean,
    required: false,
  },
});

const Invoice = models.Invoice || model('Invoice', invoiceSchema);

export default Invoice;
