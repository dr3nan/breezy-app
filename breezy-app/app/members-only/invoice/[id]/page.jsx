import { getDataById } from '../../../../utils/dataFetch';
import DisplayInvoice from '../../../../components/displayInvoice';
import React from 'react';
import Logo from '../../../../public/For Web/png/Black logo - no background.png';
import Image from 'next/image';

export default async function FetchInvoice({ params }) {
  const id = params.id;
  const data = await getDataById(id);
  const invoice = data;

  console.log(invoice);

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
    <>
      <div className='invoice-box'>
        <table cellpadding='0' cellspacing='0'>
          <tr className='top'>
            <td colspan='2'>
              <table>
                <tr>
                  <td className='title'>
                    <Image src={Logo} width={200}></Image>
                  </td>

                  <td>
                    Invoice #1
                    <br />
                    {currentDate}
                    <br />
                    {dueDate}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className='information'>
            <td colspan='2'>
              <table>
                <tr>
                  <td>
                    {invoice.fullName}
                    <br />
                    {invoice.address}
                    <br />
                    {invoice.address}
                  </td>

                  <td>
                    {invoice.fullName}
                    <br />
                    {invoice.fullName}
                    <br />
                    {invoice.email}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className='heading'>
            <td>Item</td>

            <td>Price</td>
          </tr>

          <tr className='item'>
            <td>{invoice.description}</td>

            <td>{invoice.rate}</td>
          </tr>

          <tr className='total'>
            <td></td>

            <td>{invoice.amount}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

{
  /* <div className='invoice-container'>
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
      </div> */
}

{
  /* <div className='invoice-container'>
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
      </div> */
}
