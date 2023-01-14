import React from 'react';
import styles from '../styles/landing-page.module.css';
import Image from 'next/image';
import logo from '../public/Black logo - no background.png';
import Link from 'next/link';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import arrow from '../public/arrow-right.svg'

export default function Profile() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} height={120} priority/>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.loginBox}>
        <a href="/members-only">
        <h2>Freelancer Login </h2>
        </a>
        </div>
        <div className={styles.loginBox}>
        <a href="/members-only">
        <h2>Client Login</h2>
        </a>
        </div>
      </div>
    </>
  );
}
