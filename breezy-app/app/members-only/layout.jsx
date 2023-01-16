'use client';
import { BsGrid3X3GapFill } from 'react-icons/bs';

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
  const menus = [
    { title: 'Create Invoice', link: '/members-only/create-invoice' },
    {
      title: 'Invoices',
      icon: <BsGrid3X3GapFill />,
      link: '/members-only/invoice-list',
    },
    {
      title: 'Clients',
      icon: <BsGrid3X3GapFill />,
      link: '/members-only/clients',
    },
    { title: 'Stats', icon: <BsGrid3X3GapFill />, link: '/members-only/stats' },
  ];
  return (
    <UserProvider>
      <ChakraProvider>
        <div className={styles.pageContainer}>
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <Image src={Logo} alt='breezy-logo' width={250}></Image>
            </div>
            
            <ul>
              {menus.map((menu, index) => (
                <>
                  <li key = {menu.index} className={styles.menuInfo} >
                    <span className={styles.menuIcon}>
                      <BsGrid3X3GapFill />
                    </span>
                    <Link href={menu.link}>
                      <span className={styles.menuItem}>{menu.title}</span>
                    </Link>
                  </li>
                </>
              ))}
            </ul>

            <div className={styles.logout}>
              <Logout></Logout>
            </div>
          </div>
          {children}
        </div>
      </ChakraProvider>
    </UserProvider>
  );
}

{
  /* <div className={styles.menuItem}>
                <span>
                  <BsGrid3X3GapFill />
                </span>
                <span>
                  <Link href='/members-only/create-invoice'>
                    <p> Create Invoice</p>
                  </Link>
                </span>
                
              </div>
              <div>
                <Link href='/members-only/invoice-list'>
                  <p className=''> Invoices</p>
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
            </div> */
}
