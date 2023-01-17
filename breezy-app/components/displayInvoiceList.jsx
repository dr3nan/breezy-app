'use client';

import '../components/displayInvoiceList.css';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button, ButtonGButton, roup, ChakraProvider } from '@chakra-ui/react';
import { getData } from '../utils/dataFetch';

function DisplayInvoiceList({ invoice }) {
  const [invoiceList, setInvoiceList] = useState([])

  useEffect(() => {
    getData().then((data) => {
      if (data) setInvoiceList(data);
    });
  }, []);

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

  function GetDate(date) {
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

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    const formatedDate = `${month} ${day}, ${year}`;
    return formatedDate;
  }

  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(invoice.date);
  console.log(invoice.date)
  
  const newDate = GetDate(invoice.date)

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
                      {invoice.fullName}
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
                      {invoice.fullName}
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

        </div>
      </ChakraProvider>
    </>
  );
}

export default DisplayInvoiceList;
