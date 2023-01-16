'use client';

import React from 'react';
import styles from '../styles/landing-page.module.css';
import Image from 'next/image';
import Logo from '../public/Black logo - no background.png';
import { Box, ChakraProvider } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DisplayInvoice from './displayInvoice';
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function ClientViewInvoice({invoice, dueDate, currentDate, amount}) {

  
  return (
    <>
     <ChakraProvider>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={Logo} height={120} priority alt='logo' />
        </div>
      </div>
      <div className={styles.container}>
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
      </div>
      <div className = {styles.payButton}>
   
      <Button bg = '#bfdbfe'>PAY INVOICE</Button>
      </div>


     </ChakraProvider>

    </>
  );
}
