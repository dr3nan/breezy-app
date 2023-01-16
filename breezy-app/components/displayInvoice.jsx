'use client';
import '../components/displayInvoice.css';
import React from 'react';

function DisplayInvoice({ invoice }) {
  function GetDate(date) {
    date = new Date(date);

    let month = date.toLocaleString([], {
      month: 'numeric',
    });
    let day = date.toLocaleString([], {
      day: 'numeric',
    });

    let year = date.toLocaleString([], {
      year: 'numeric',
    });

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    const formatedDate = `${day}/${month}/${year}`;

    return formatedDate;
  }

  const amount = `£${invoice.quantity * invoice.rate}`;
  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(invoice.date);

  const hardCodeDate = '13/01/2023'.toString();

  if (hardCodeDate === dueDate) console.log('true');

  return (
    <></>
    // <div className='invoice-container'>
    //   <div>
    //     <div className='personal-details'>
    //       <h2>{invoice.fullName}</h2>
    //       <p>{invoice.address}</p>
    //       <p>{invoice.phoneNumber}</p>
    //       <p>{invoice.email}</p>
    //     </div>
    //   </div>
    //   <div>
    //     <div className='client-details'>
    //       <h3>BILL TO</h3>
    //       <h2>{invoice.clientFullName}</h2>
    //       <p>{invoice.clientAddress}</p>
    //       <p>{invoice.clientPhoneNumber}</p>
    //       <p>{invoice.clientEmail}</p>
    //     </div>
    //     <div className="invoice-basic-details">
    //       <span className="description"><h3>DESCRIPTION</h3></span>
    //       <h3>RATE</h3>
    //       <h3>QTY</h3>
    //       <h3>AMOUNT</h3>
    //       </div>
    //       <div className="invoice-basic-details">
    //       <span className="description"><h3>{invoice.description}</h3></span>
    //       <p>{invoice.rate}</p>
    //       <p>{invoice.quantity}</p>
    //       <p>{invoice.amount}</p>
    //       </div>
    //     </div>
    //   </div>
  );
}

export default DisplayInvoice;

