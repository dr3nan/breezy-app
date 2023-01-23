'use client';

import { BsFillFileEarmarkTextFill, BsPeopleFill, BsPencilSquare } from 'react-icons/bs';
import Link from 'next/link';
import styles from '../../styles/sidebar.module.css';
import Image from 'next/image';
import Logo from '../../public/For Web/png/Black logo - no background.png';
import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react';
import '../../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function Layout({ children }: { children: React.ReactNode }) {

  const menus = [
    {
      title: 'Create Invoice',
      icon: <BsPencilSquare />,
      link: '/members-only/create-invoice',
    },
    {
      title: 'Invoices',
      icon: <BsFillFileEarmarkTextFill />,
      link: '/members-only/invoice-list'
    },
    {
      title: 'Clients',
      icon: <BsPeopleFill />,
      link: '/members-only/clients'
    }
  ];

  return (
    <UserProvider>
      <ChakraProvider>
        <div className={styles.pageContainer}>
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <Image src={Logo} alt='breezy logo' width={250} priority></Image>
            </div>
            <ul className={styles.menuItems}>
              {menus.map((menu, index) => (
                <>
                  <li key={index} className={styles.menuInfo}>
                    <span className={styles.menuIcon}>{menu.icon}</span>
                    <Link data-cy={`link-${index}`} href={menu.link}>
                      <span className={styles.menuItem}>{menu.title}</span>
                    </Link>
                  </li>
                </>
              ))}
            </ul>
            <div className={styles.logout}>
              <a href='/api/auth/logout'>
                <Button className='logout-button' bg='gray.200' color='black' variant='solid' size='lg'>
                  LOGOUT
                </Button>
              </a>
            </div>
          </div>
          {children}
        </div>
      </ChakraProvider>
    </UserProvider>
  );
};
