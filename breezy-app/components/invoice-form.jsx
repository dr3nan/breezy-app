'use client';

import { useState } from 'react';
import '../components/invoice-form.css';
import { submitData } from '../utils/dataFetch';
import React from 'react';

const InvoiceForm = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [clientFullName, setClientFullName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientPhoneNumber, setClientPhoneNumber] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');

  const [invoiceData, setInvoice] = useState([]);

  const pushInvoice =  async (invoice) => {
    const newInvoice = await submitData(invoice);
    setInvoice([...invoiceData, newInvoice]);
  };

  function handleSubmit(input) {
    input.preventDefault();
    const newInvoiceData = {
      fullName,
      address,
      phoneNumber,
      email,
      clientFullName,
      clientAddress,
      clientPhoneNumber,
      clientEmail,
      description,
      rate,
      quantity,
      date,
    };

    pushInvoice(newInvoiceData);

    setFullName('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');

    setClientFullName('');
    setClientAddress('');
    setClientPhoneNumber('');
    setClientEmail('');

    setDescription('');
    setRate('');
    setQuantity('');
    setDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <div className='people-details-container'>
          <div className='personal-details-container'>
            <h2>Personal Details</h2>

            <label htmlFor='full-name'>FULL NAME</label>

            <input
              type='text'
              name='full-name'
              value={fullName}
              placeholder='insert full name...'
              onChange={(e) => setFullName(e.target.value)}
            />

            <label htmlFor='address'>ADDRESS</label>

            <input
              type='text'
              name='address'
              value={address}
              placeholder='insert address...'
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor='phone-number'>PHONE NUMBER</label>

            <input
              type='text'
              name='phone-number'
              value={phoneNumber}
              placeholder='insert phone number...'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor='email'>EMAIL ADDRESS</label>

            <input
              type='text'
              name='email'
              value={email}
              placeholder='insert email address...'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='client-details-container'>
            <h2>Client Details</h2>

            <label htmlFor='client-full-name'>FULL NAME</label>

            <input
              type='text'
              name='client-full-name'
              value={clientFullName}
              placeholder='insert full name...'
              onChange={(e) => setClientFullName(e.target.value)}
            />

            <label htmlFor='client-address'>ADDRESS</label>

            <input
              type='text'
              name='client-address'
              value={clientAddress}
              placeholder='insert address...'
              onChange={(e) => setClientAddress(e.target.value)}
            />
            <label htmlFor='client-phone-number'>PHONE NUMBER</label>

            <input
              type='text'
              name='client-phone-number'
              value={clientPhoneNumber}
              placeholder='insert phone number...'
              onChange={(e) => setClientPhoneNumber(e.target.value)}
            />
            <label htmlFor='client-email'>EMAIL ADDRESS</label>

            <input
              type='text'
              name='client-email'
              value={clientEmail}
              placeholder='insert email address...'
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </div>
        </div>
        <div className='job-details-container'>
          <h2>Job Details</h2>

          <label htmlFor='description'>DESCRIPTION</label>

          <input
            type='text'
            name='description'
            value={description}
            placeholder='Insert a description...'
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor='rate'>RATE</label>
          <input
            type='text'
            name='rate'
            value={rate}
            placeholder='Insert a venue...'
            onChange={(e) => setRate(e.target.value)}
          />
          <label htmlFor='quantity'>QUANTITY</label>
          <input
            type='text'
            name='quantity'
            value={quantity}
            placeholder='Insert a venue...'
            onChange={(e) => setQuantity(e.target.value)}
          />

          <label htmlFor='date'>DUE BY</label>

          <input
            type='datetime-local'
            name='date'
            value={date}
            placeholder='Date'
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <input type='submit' value='CREATE INVOICE' />
    </form>
  );
};

export default InvoiceForm;

{
  /* <Link href='/invoice-list'>
</Link> */
}
