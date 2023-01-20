'use client';

import React, { useRef } from 'react';
import { submitData } from '../utils/dataFetch';
import { FormControl, FormLabel, ChakraProvider, Input } from '@chakra-ui/react';
import '../components/invoice-form.css';

function InvoiceForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = {
      fullName: formData.get('fullName'),
      phoneNumber: formData.get('phoneNumber'),
      email: formData.get('email'),
      clientFullName: formData.get('clientFullName'),
      clientAddress: formData.get('clientAddress'),
      clientPhoneNumber: formData.get('clientPhoneNumber'),
      clientEmail: formData.get('clientEmail'),
      purchaseOrderNumber: formData.get('purchaseOrderNumber'),
      description: formData.get('description'),
      rate: formData.get('rate'),
      date: formData.get('date'),
      paid: false,
      address: formData.get('address')
    }
    await submitData(form);
    if (formRef && formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <ChakraProvider>
      <form ref={formRef} onSubmit={event => handleSubmit(event)} autoComplete='off'>
        <div className='form-container'>
          <div className='people-details-container'>
            <div className='personal-details-container'>
              <h2>
                <strong>Personal Details</strong>
              </h2>
              <br />

              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type='text'
                  name='fullName'
                  placeholder='Insert full name...'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  type='text'
                  name='address'
                  placeholder='Insert address...'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type='number'
                  name='phoneNumber'
                  placeholder='Insert phone number...'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type='email'
                  name='email'
                  placeholder='Insert email address...'
                />
              </FormControl>
              <br />

              <h2>
                <strong>Client Details</strong>
              </h2>
              <br />

              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type='text'
                  name='clientFullName'
                  placeholder='Insert full name...'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  type='text'
                  name='clientAddress'
                  placeholder='Insert Address...'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type='number'
                  name='clientPhoneNumber'
                  placeholder='Insert phone number...'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type='email'
                  name='clientEmail'
                  placeholder='Insert email address'
                />
              </FormControl>
            </div>
            <div className='job-details-container'>
              <h2>
                <strong>Job Details</strong>
              </h2>
              <br />
              <FormControl>
                <FormLabel>PO Number</FormLabel>
                <Input
                  type='number'
                  name='purchaseOrderNumber'
                  placeholder='Insert purchase order number...'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  type='text'
                  name='description'
                  placeholder='Insert description...'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Rate</FormLabel>
                <Input
                  type='number'
                  name='rate'
                  placeholder='Insert rate...'
                />
              </FormControl>

              <FormControl>
                <FormLabel>Due By</FormLabel>
                <Input
                  type='datetime-local'
                  name='date'
                />
              </FormControl>
              <input type='submit' value='CREATE INVOICE' />
            </div>
          </div>
        </div>
      </form>
    </ChakraProvider>
  );
}

export default InvoiceForm;
