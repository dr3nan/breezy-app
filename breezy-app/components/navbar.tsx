import React from 'react';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';
import { BsFillFileEarmarkTextFill, BsPencilSquare } from 'react-icons/bs';
import Link from 'next/link';
import './navbar.css';

const NavBar = () => {
  // TODO: implement user name in navbar
  // const { user } = useUser();

  return (
    <UserProvider>
      <div className='sidebar'>
        <div className='logo'>
          <img src='/public/BlackLogo-2.svg' alt='breezy logo' width='250' />
        </div>
        <div className='menuItems'>
          <div title='create-invoice' className='create-invoice-sidebar'>
            <Link href='/user-home/create-invoice2'>
              <button className='menuItem'>
                <BsPencilSquare className='menuIcon' />
                Create Invoice
              </button>
            </Link>
          </div>
          <div className='invoice-list-sidebar'>
            <Link href='/user-home/invoice-list2'>
              <button className='menuItem'>
                <BsFillFileEarmarkTextFill className='menuIcon' />
                Invoices
              </button>
            </Link>
          </div>
          {/* Button of clients will be done later, when clients are implemented in DDBB */}
          {/* <div className='client-list-sidebar'>
            <Link href='/user-home/clients2'>
              <button className='menuItem'>
                <BsPeopleFill className='menuIcon' />
                Clients
              </button>
            </Link>
          </div> */}
        </div>
        {/* <a>{user?.nickname}</a> */}
        <div className='logout-sidebar'>
          <a href='/api/auth/logout'>
            <button className='logout-button'>LOGOUT</button>
          </a>
        </div>
      </div>
    </UserProvider>
  );
};

export default NavBar;
