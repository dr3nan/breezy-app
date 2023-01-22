'use client';

import React, { useRef } from 'react';
import { submitData } from '../utils/dataFetch';
import { FormLabel, ChakraProvider, Input } from '@chakra-ui/react';
import '../components/invoice-form.css';

function InvoiceForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = {
      fullName: formData.get('fullName') as String,
      phoneNumber: formData.get('phoneNumber') as unknown as Number,
      email: formData.get('email') as String,
      clientFullName: formData.get('clientFullName') as String,
      clientAddress: formData.get('clientAddress') as String,
      clientPhoneNumber: formData.get('clientPhoneNumber') as unknown as Number,
      clientEmail: formData.get('clientEmail') as String,
      purchaseOrderNumber: formData.get('purchaseOrderNumber') as unknown as Number,
      description: formData.get('description') as String,
      rate: formData.get('rate') as unknown as Number,
      date: formData.get('date') as String,
      paid: false,
      address: formData.get('address') as String
    }
    // TODO: to rev
    let invoiceCreated;
    try {
      invoiceCreated = await submitData(form);
    } catch (error) {
      console.error(error)
    }
    if (formRef && formRef.current) {
      formRef.current.reset();
    }
    return invoiceCreated;
  };

  return (
    <ChakraProvider>
      <form ref={formRef} onSubmit={event => handleSubmit(event)} autoComplete='off'>
        <div className='form-container'>
          <div className='people-details-container'>
            <div className='personal-details-container'>
              <h2><strong>Personal Details</strong></h2>
              <br />
              <FormLabel>Full Name</FormLabel>
              <Input
                type='text'
                name='fullName'
                placeholder='Insert full name...'
                required
              />
              <FormLabel>Address</FormLabel>
              <Input
                type='text'
                name='address'
                placeholder='Insert address...'
                required
              />
              <FormLabel>Phone Number</FormLabel>
              <Input
                type='number'
                name='phoneNumber'
                placeholder='Insert phone number...'
                required
              />
              <FormLabel>Email Address</FormLabel>
              <Input
                type='email'
                name='email'
                placeholder='Insert email address...'
                required
              />
              <br />
              <h2><strong>Client Details</strong></h2>
              <br />
              <FormLabel>Full Name</FormLabel>
              <Input
                type='text'
                name='clientFullName'
                placeholder='Insert full name...'
                required
              />
              <FormLabel>Address</FormLabel>
              <Input
                type='text'
                name='clientAddress'
                placeholder='Insert Address...'
                required
              />
              <FormLabel>Phone Number</FormLabel>
              <Input
                type='number'
                name='clientPhoneNumber'
                placeholder='Insert phone number...'
                required
              />
              <FormLabel>Email Address</FormLabel>
              <Input
                type='email'
                name='clientEmail'
                placeholder='Insert email address'
                required
              />
            </div>
            <div className='job-details-container'>
              <h2><strong>Job Details</strong></h2>
              <br />
              <FormLabel>PO Number</FormLabel>
              <Input
                type='number'
                name='purchaseOrderNumber'
                placeholder='Insert purchase order number...'
                required
              />
              <FormLabel>Description</FormLabel>
              <Input
                type='text'
                name='description'
                placeholder='Insert description...'
                required
              />
              <FormLabel>Rate</FormLabel>
              <Input
                type='number'
                name='rate'
                placeholder='Insert rate...'
                required
              />
              <FormLabel>Due By</FormLabel>
              <Input
                type='datetime-local'
                name='date'
                min={new Date().toISOString().slice(0, 16)}
                required
              />
              <input type='submit' value='CREATE INVOICE' />
            </div>
          </div>
        </div>
      </form>
    </ChakraProvider>
  );
}

export default InvoiceForm;
