'use client';

import '../../styles/globals.css';
import Link from 'next/link';
import styles from '../../styles/sidebar.module.css';
import Image from 'next/image';
import Logo from '../../public/For Web/png/Black logo - no background.png';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ChakraProvider } from '@chakra-ui/react';
import UserProfile from './profile';

import Logout from './logout';

export default function Layout({ children }) {
  return (
    <UserProvider>
      <ChakraProvider>
        <div className={styles.pageContainer}>

          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <Image src={Logo} alt='breezy-logo' width={250}></Image>
            </div>
            <div className={styles.info}>
              <div>
                <Link href='/members-only/create-invoice'>
                  <p className=''>Create Invoice</p>
                </Link>
              </div>
              <div>
                <Link href='/members-only/invoice-list'>
                  <p className=''>Invoices</p>
                </Link>
              </div>
              <div>
                <Link href='/members-only/clients'>
                  <p className=''>Clients</p>
                </Link>
              </div>
              <div>
                <Link href='/members-only/stats'>
                  <p className=''>Stats</p>
                </Link>
              </div>
            </div>
            
            <Logout></Logout>
          </div>
          {children}
    
        </div>
      </ChakraProvider>
    </UserProvider>
  );
}

{
  /* <div className={styles.pageContainer}>

<div className={styles.sidebar}>
  <div className={styles.logo}>
    <Image src={Logo} alt='breezy-logo' width={250}></Image>
  </div>
  <div className={styles.info}>
    <div>
      <Link href='/members-only/create-invoice'>
        <p className=''>Create Invoice</p>
      </Link>
    </div>
    <div>
      <Link href='/members-only/invoice-list'>
        <p className=''>Invoices</p>
      </Link>
    </div>
    <div>
      <Link href='/members-only/clients'>
        <p className=''>Clients</p>
      </Link>
    </div>
    <div>
      <Link href='/members-only/stats'>
        <p className=''>Stats</p>
      </Link>
    </div>
  </div>
  <Logout></Logout>
  <div className={styles.logout}>LOGOUT BUTTON</div>
</div>
{children}
</div> */
}
