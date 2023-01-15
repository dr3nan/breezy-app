import '../../styles/globals.css';
import Link from 'next/link';
import styles from '../../styles/sidebar.module.css';
import Image from 'next/image';
import Logo from '../../public/For Web/png/Black logo - no background.png';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Profile from './profile';
import Logout from './logout';


export default function Layout({ children }) {
  return (
    <UserProvider>
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
          <div className={styles.logout}>LOGOUT BUTTON</div>
        </div>
      {children}
      </div>
    </UserProvider>
  );
}

{
  /* <div className={styles.sidebar}>
  <div className=' bg-blue-200 h-screen w-72 p-10'>
              <div className=''>
                <Image src={Logo} alt='Breezy Logo' width={1000} height={500} />
              </div>
              <div className=' mt-40'>
                <div className=' space-y-10'>
                  <div>
                    <Link href='/members-only/create-invoice'>
                      <h1 className=''>CREATE INVOICE</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/invoice-list'>
                      <h1 className=''>INVOICES</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/clients'>
                      <h1 className=''>CLIENTS</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/stats'>
                      <h1 className=''>STATS</h1>
                    </Link>
                  </div>
                  <Profile></Profile>
                </div>
              </div>
            </div>

            <div className='container'>{children}</div>
          </div>
        </body> */
}
