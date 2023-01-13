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
    <div className='flex flex-wrap bg-slate-400 mt-20 p-10'>
      <div className="flex flex-wrap flex-col">
        <div className='flex'>
          <div className='flex flex-col justify-end'>
            <h2>{invoice.fullName}</h2>
            <p>{invoice.address}</p>
            <p>{invoice.phoneNumber}</p>
            <p>{invoice.email}</p>
          </div>
          <div className='flex flex-col justify-self-end '>
            <h2>{invoice.fullName}</h2>
            <p>{invoice.address}</p>
            <p>{invoice.phoneNumber}</p>
            <p>{invoice.email}</p>
          </div>
        </div>
        <div className='client-details'>
          <h4>BILL TO</h4>
          <h2>{invoice.clientFullName}</h2>
          <p>{invoice.clientAddress}</p>
          <p>{invoice.clientPhoneNumber}</p>
          <p>{invoice.clientEmail}</p>
        </div>
        <div className='job-details'>
          <div className='job-details-headers'>
            <div className='job-details-description'>
              <h5>DESCRIPTION</h5>
            </div>
            <h5>RATE</h5>
            <h5>QTY</h5>
            <h5>AMOUNT</h5>
          </div>
          <span className='job-details-values'>
            <span id='description'>
              <p>{invoice.description}</p>
            </span>
            <span id='rate'>
              <p>£{invoice.rate}</p>
            </span>
            <span id='quantity'>
              <p>{invoice.quantity}</p>
            </span>
            <span id='amount'>
              <p>£10</p>
            </span>
          </span>
        </div>
        <div className='total-amount-details'>
          <div className='sub-total'>
            <h5>SUB TOTAL</h5>
            <h5>£10</h5>
          </div>
          <div className='taxable'>
            <span>
              <h5>TAXABLE</h5>
            </span>
            <span>
              <h5></h5>
            </span>
          </div>
          <div className='vat'>
            <span>
              <h5>VAT(20%)</h5>
            </span>
            <span>
              <h5></h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayInvoice;

{
  /* <div className="invoice-container" id="invoice">
      <div>
        <div className="invoice-basic-details">
          <h5>DATE</h5>
          <p>Monday 2nd of January</p>
          <h5>DUE</h5>
          {/* <p>
            {hardCodeDate === GetDate(invoice.date)
              ? "On receipt"
              : GetDate(invoice.date)}
          </p> */
}
//       <h5>BALANCE DUE</h5>
//       <p>£100</p>
//     </div>
//     <div className="personal-details">
//       <h2>{invoice.fullName}</h2>
//       <p>{invoice.address}</p>
//       <p>{invoice.phoneNumber}</p>
//       <p>{invoice.email}</p>
//     </div>
//     <div className="client-details">
//       <h4>BILL TO</h4>
//       <h2>{invoice.clientFullName}</h2>
//       <p>{invoice.clientAddress}</p>
//       <p>{invoice.clientPhoneNumber}</p>
//       <p>{invoice.clientEmail}</p>
//     </div>
//     <div className="job-details">
//       <div className="job-details-headers">
//         <div className="job-details-description">
//           <h5>DESCRIPTION</h5>
//         </div>
//         <h5>RATE</h5>
//         <h5>QTY</h5>
//         <h5>AMOUNT</h5>
//       </div>
//       <span className="job-details-values">
//         <span id="description">
//           <p>{invoice.description}</p>
//         </span>
//         <span id="rate">
//           <p>£{invoice.rate}</p>
//         </span>
//         <span id="quantity">
//           <p>{invoice.quantity}</p>
//         </span>
//         <span id="amount">
//           <p>£10</p>
//         </span>
//       </span>
//     </div>
//     <div className="total-amount-details">
//       <div className="sub-total">
//         <h5>SUB TOTAL</h5>
//         <h5>£10</h5>
//       </div>
//       <div className="taxable">
//         <span>
//           <h5>TAXABLE</h5>
//         </span>
//         <span>
//           <h5></h5>
//         </span>
//       </div>
//       <div className="vat">
//         <span>
//           <h5>VAT(20%)</h5>
//         </span>
//         <span>
//           <h5></h5>
//         </span>
//       </div>
//     </div>
//   </div>
// </div> */}

// function GetDate(date) {
//   date = new Date(date);

//   let month = date.toLocaleString([], {
//     month: "numeric",
//   });
//   let day = date.toLocaleString([], {
//     day: "numeric",
//   });

//   let year = date.toLocaleString([], {
//     year: "numeric",
//   });

//   if (month < 10) {
//     month = `0${month}`;
//   }
//   if (day < 10) {
//     day = `0${day}`;
//   }

//   const formatedDate = `${day}/${month}/${year}`;

//   return formatedDate;
// }

// const amount = `£${invoice.quantity * invoice.rate}`;
// const currentDate = GetDate(Date.now());
// const dueDate = GetDate(invoice.date);

// const hardCodeDate = "13/01/2023".toString();

// if (hardCodeDate === dueDate) console.log("true");
