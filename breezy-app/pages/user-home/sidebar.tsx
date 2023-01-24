import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { BsFillFileEarmarkTextFill, BsPeopleFill, BsPencilSquare } from 'react-icons/bs';
import Link from 'next/link';

const Sidebar = () => {

  return (
    <UserProvider>
      <div className='sidebar'>
        <div className='logo'>
          <img src='/ForWeb/png/BlackLogo.png' alt='breezy logo' width='250' />
        </div>
        <div className='menuItems'>
          <Link href='/user-home/create-invoice2'>
            <button className='menuItem'>
              <BsPencilSquare className='menuIcon' />
              Create Invoice
            </button>
          </Link>
          <Link href='/user-home/invoice-list2'>
            <button className='menuItem'>
              <BsFillFileEarmarkTextFill className='menuIcon' />
              Invoices
            </button>
          </Link>
          <Link href='/user-home/clients2'>
            <button className='menuItem'>
              <BsPeopleFill className='menuIcon' />
              Clients
            </button>
          </Link>
        </div>
        <div className='logout'>
          <a href='/api/auth/logout'>
            <button className='logout-button'>LOGOUT</button>
          </a>
        </div>
      </div>
    </UserProvider>
  )
}

export default Sidebar;
