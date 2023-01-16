import { getDataById } from '../../../utils/dataFetch';
import DisplayInvoice from '../../../components/displayInvoice';
import React from 'react';
import Logo from '../../../public/For Web/png/Black logo - no background.png';
import Image from 'next/image';
import ClientViewInvoice from '../../../components/client-view-invoice';

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


  return (
    <>
    <ClientViewInvoice invoice = {invoice} amount = {amount} currentDate = {currentDate} dueDate ={dueDate}/>
      {/* <div className='invoice-box'>
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
      </div> */}
    </>
  );
}