'use client';

import React from 'react';
import styles from '../styles/landing-page.module.css';
import Image from 'next/image';
import Logo from '../public/Black logo - no background.png';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { updateData } from '../utils/dataFetch';

export default function ClientViewInvoice({
  invoice,
  dueDate,
  currentDate,
  amount,
}) {
  const [invoiceStatus, setInvoiceStatus] = useState(invoice.paid);

  const updateStatus = async (invoice) => {
    const newInvoiceStatus = await updateData(invoice._id, invoice);
    setInvoiceStatus(newInvoiceStatus.paid);
  };

  function handleOnClick() {
    updateStatus({ ...invoice, paid: true });
  }

  // if (invoiceStatus === true)
  return (
    <>
      <ChakraProvider>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image src={Logo} height={120} alt='logo' priority />
          </div>
        </div>
        <div className={styles.container}>
          {invoiceStatus ? (
            <div>
              <h1>Thanks for your payment!</h1>
              <a href='/'>
                <Button bg='#bfdbfe' size='lg'>
                  BACK TO HOME
                </Button>
              </a>
            </div>
          ) : (
            <div className='invoice-box'>
              <table cellpadding='0' cellspacing='0'>
                <tr className='top'>
                  <td colspan='2'>
                    <table>
                      <tr>
                        <td className='title'>
                          <Image src={Logo} width={200} alt='logo'></Image>
                        </td>

                        <td>
                          {invoice.length}
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
              <div className={styles.payButton}>
                {!invoiceStatus ? (
                  <Button onClick={handleOnClick} bg='#bfdbfe'>
                    PAY INVOICE
                  </Button>
                ) : (
                  'paid!'
                )}
              </div>
            </div>
          )}
        </div>
      </ChakraProvider>
    </>
  );
}
