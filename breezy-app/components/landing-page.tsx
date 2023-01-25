'use client';

import React from 'react';
import styles from '../styles/landing-page.module.css';
import Image from 'next/image';
import logo from '../public/BlackLogo.png';
import { BsArrowRight } from 'react-icons/bs';
import { getData } from '../utils/dataFetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [invoice, setInvoiceList] = useState([]);

  /* useEffect(() => {
    getData().then((data) => {
      if (data) setInvoiceList(data);
    });
  }, []); */
  // TODO
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/pay-invoiceTwo/${inputValue}`);
    setInputValue('');
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} height={120} priority alt='logo' data-testid="LandingPageLogo" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <a className='FreelancerLoginButton' href='/user-home/invoice-list2'>
            <h2>Log In to My Invoices</h2>
          </a>
          <span className={styles.arrow}>
            <BsArrowRight />
          </span>
        </div>
        <div className={styles.loginBox}>
          <button className='PayAnInvoiceButton' onClick={() => setShowInput(!showInput)}>
            <h2>Pay An Invoice</h2>
          </button>
          <span className={styles.arrow}>
            <BsArrowRight />
          </span>
        </div>
      </div>
      <div className={styles.inputBox}>
        {showInput && (
          <form onSubmit={handleSubmit} className={styles.input}>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type='text'
              placeholder='Insert PO number'
            />
          </form>
        )}
      </div>
    </>
  );
};

export default LandingPage;
