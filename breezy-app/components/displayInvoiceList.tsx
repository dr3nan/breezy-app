'use client';

import '../components/displayInvoiceList.css';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { invoiceFields } from '../utils/types';

function DisplayInvoiceList({ invoice }: {invoice: []}) {
  const [isPaid, setPaidStatus] = useState([]);
  const [paidRender, setPaidRender] = useState(false);
  console.log('invoice in displayInvoiceList: ', invoice);

  function findPaid() {
    let paid = invoice.filter((invoice: { paid: boolean; }) => invoice.paid === true);
    setPaidStatus(paid);
    setPaidRender(true);
  }
  function findUnpaid() {
    let unPaid = invoice.filter((invoice: { paid: boolean; }) => invoice.paid === false);
    setPaidStatus(unPaid);
    setPaidRender(true);
  }

  function allInvoices() {
    setPaidRender(false);
  }

  console.log(invoice);

  function GetDate(date: string | number | Date) {
    date = new Date(date);

    let month = date.toLocaleString([], {
      month: 'short',
    });
    let day = date.toLocaleString([], {
      day: 'numeric',
    });

    let year = date.toLocaleString([], {
      year: 'numeric',
    });

    if (Number(month) < 10) {
      month = `0${month}`;
    }
    if (Number(day) < 10) {
      day = `0${day}`;
    }

    const formatedDate = `${month} ${day}, ${year}`;
    return formatedDate;
  }

  //const currentDate = GetDate(Date.now());
  //const dueDate = GetDate(invoice.date);
  //console.log(invoice.date);
  //const newDate = GetDate(invoice.date);

  return (
    <>
      <ChakraProvider>
        <div className='filter-buttons'>
          <button onClick={findUnpaid}>OUTSTANDING </button>
          <button onClick={findPaid}>PAID</button>
          <button onClick={allInvoices}>ALL INVOICES</button>
        </div>

        <table className='GeneratedTable'>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Due Date</th>
              <th>Due</th>
            </tr>
          </thead>

          {!paidRender ? (
            <tbody>
              {invoice.map((invoice: { _id: React.Key | null | undefined; purchaseOrderNumber: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; clientFullName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date: any; rate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <tr key={invoice._id}>
                  <td>
                    <Link href={`/members-only/invoice/${invoice._id}`}>
                      #{invoice.purchaseOrderNumber}
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{GetDate(invoice.date)}</td>
                  <td>£{invoice.rate}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {isPaid.map((invoice) => (
                <tr key={invoice._id}>
                  <td>
                    <Link href={`/members-only/invoice/${invoice._id}`}>
                      {`#${invoice.purchaseOrderNumber}`}
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{GetDate(invoice.date)}</td>
                  <td>£{invoice.rate}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </ChakraProvider>
    </>
  );
}

export default DisplayInvoiceList;
