'use client';

import { BsGrid3X3GapFill } from 'react-icons/bs';

import '../../styles/globals.css';
import Link from 'next/link';
import styles from '../../styles/sidebar.module.css';
import Image from 'next/image';
import Logo from '../../public/For Web/png/Black logo - no background.png';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ChakraProvider} from '@chakra-ui/react';


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
    { title: 'Dashboard', icon: <BsGrid3X3GapFill />, link: '/members-only/stats' },
  ];

  const keyProp = 1 
  return (
    <UserProvider>
      <ChakraProvider>
        <div className={styles.pageContainer}>
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <Image src={Logo} alt='breezy-logo' width={250} priority></Image>
            </div>
            
            <ul key = {keyProp}>
              {menus.map((menu, index) => (
                <>
                  <li key ={index}className={styles.menuInfo} >
                  {console.log(index)} 
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


