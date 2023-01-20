'use client';

import '../components/displayInvoiceList.css';
import React from 'react';
import Link from 'next/link';
import { useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { invoiceFields } from '../utils/types';

function DisplayInvoiceList({ invoice }: { invoice: invoiceFields[] }) {
  const [isPaid, setPaidStatus] = useState<invoiceFields[]>([]);
  const [paidRender, setPaidRender] = useState(false);
  console.log('invoice in displayInvoiceList: ', invoice);

  function findPaid() {
    let paid = invoice.filter((invoice) => invoice.paid === true);
    setPaidStatus(paid);
    setPaidRender(true);
  }
  function findUnpaid() {
    let unPaid = invoice.filter((invoice) => invoice.paid === false);
    setPaidStatus(unPaid);
    setPaidRender(true);
  }

  function allInvoices() {
    setPaidRender(false);
  }

  console.log(invoice);

  function GetDate(date: Date) {
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
    };

    if (Number(day) < 10) {
      day = `0${day}`;
    };

    return `${month} ${day}, ${year}`;
  };

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
              {invoice.map((invoice) => (
                <tr key={invoice._id}>
                  <td>
                    <Link href={`/members-only/invoice/${invoice._id}`}>
                      <>
                        #{invoice.purchaseOrderNumber}
                      </>
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{GetDate(invoice.date)}</td>
                  <td>
                    <>
                      £{invoice.rate}
                    </></td>
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
                  <td>
                    <>
                      £{invoice.rate}
                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </ChakraProvider>
    </>
  );
};

export default DisplayInvoiceList;
