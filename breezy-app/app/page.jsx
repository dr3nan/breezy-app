import React from 'react';
import styles from '../styles/landing-page.module.css';
import Image from 'next/image';
import logo from '../public/Black logo - no background.png';

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
        <p>Freelancer Login </p>
        </div>
        <div className={styles.loginBox}>
        <p>Client Login </p>
        </div>
     
      </div>
    </>
  );
}
