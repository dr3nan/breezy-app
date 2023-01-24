import React from 'react';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';
import { BsFillFileEarmarkTextFill, BsPeopleFill, BsPencilSquare } from 'react-icons/bs';
import Link from 'next/link';
import './sidebar.css';

const Sidebar = () => {
  // TODO: add user to sidebar
  // TODO: change sidebar to navBar
  // const { user, error, isLoading } = useUser();
  // console.log('user provider', user?.name);

  return (
    <UserProvider>
      <div className='sidebar'>
        <div className='logo'>
          <img src='/public/BlackLogo-2.svg' alt='breezy logo' width='250' />
        </div>
        <div className='menuItems'>
          <div className='create-invoice-sidebar'>
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
          <div className='client-list-sidebar'>
            <Link href='/user-home/clients2'>
              <button className='menuItem'>
                <BsPeopleFill className='menuIcon' />
                Clients
              </button>
            </Link>
          </div>
        </div>
        <div className='logout-sidebar'>
          <a href='/api/auth/logout'>
            <button className='logout-button'>LOGOUT</button>
          </a>
        </div>
      </div>
    </UserProvider>
  )
}

export default Sidebar;
