import { getDataById } from '../../../../utils/dataFetch';
import DisplayInvoice from '../../../../components/displayInvoice';
import React from 'react';

export default async function FetchInvoice({ params }) {
  const id = params.id;
  const data = await getDataById(id);
  const invoice = data 

  return (
    <div className='invoice-container'>
      <div>
        <div className='personal-details'>
          <h2>{invoice.fullName}</h2>
          <p>{invoice.address}</p>
          <p>{invoice.phoneNumber}</p>
          <p>{invoice.email}</p>
        </div>
      </div>
      <div>
        <div className='client-details'>
          <h3>BILL TO</h3>
          <h2>{invoice.clientFullName}</h2>
          <p>{invoice.clientAddress}</p>
          <p>{invoice.clientPhoneNumber}</p>
          <p>{invoice.clientEmail}</p>
        </div>
        <div className="invoice-basic-details">
          <span className="description"><h3>DESCRIPTION</h3></span>
          <h3>RATE</h3>
          <h3>QTY</h3>
          <h3>AMOUNT</h3>
          </div>
          <div className="invoice-basic-details">
          <span className="description"><h3>{invoice.description}</h3></span>
          <p>{invoice.rate}</p>
          <p>{invoice.quantity}</p>
          <p>{invoice.amount}</p>
          </div>
        </div>
      </div>
    
  );
}

// const {
//   fullName,
//   phoneNumber,
//   email,
//   clientFullName,
//   clientAddress,
//   clientPhoneNumber,
//   clientEmail,
//   quantity,
//   date,
// } = data;
