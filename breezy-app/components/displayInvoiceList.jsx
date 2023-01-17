'use client';

import '../components/displayInvoiceList.css';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Button, ButtonGButton, roup, ChakraProvider } from '@chakra-ui/react';

function DisplayInvoiceList({ invoice }) {
  console.log(invoice);

  const [isPaid, setPaidStatus] = useState([]);
  const [paidRender, setPaidRender] = useState(false);

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

  // if(invoice[0].paid === false)
  return (
    <>
      <ChakraProvider>
        <div className='container'>

        <span className='filter-Buttons'>
          <Button onClick={findUnpaid} bg='blue'>OUTSTANDING </Button>
          <Button onClick={findPaid} bg='blue'>PAID</Button>
          <Button onClick={allInvoices} bg='blue'>All Invoices</Button>
        </span>
        <table className='GeneratedTable'>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Date</th>
              <th>Due</th>
            </tr>
          </thead>

          {!paidRender ? (
            <tbody>
              {invoice.map((invoice) => (
                <tr key={invoice._id}>
                  <td>
                    <Link href={`/members-only/invoice/${invoice._id}`}>
                      {invoice.fullName}
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{invoice.date}</td>
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
                      {invoice.fullName}
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{invoice.date}</td>
                  <td>£{invoice.rate}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        </div>
      </ChakraProvider>
    </>
  );
}

export default DisplayInvoiceList;
