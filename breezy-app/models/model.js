
import { Schema, model, models } from 'mongoose';


const userSchema = new Schema({
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

  description: {
    type: String,
    required: false,
  },
  rate: {
    type: Number,
    required: false,
  },
  quantity: {
    type: Number,
    require: false,
  },

  date: {
    type: Date,
    required: false,
  },
  status: {
    type: Boolean,  
    required: false
  }
  
});

const User = models.User || model('User', userSchema);

export default User;




