import React from 'react';
import { UserProvider, useUser } from '@auth0/nextjs-auth0/client';
import { BsFillFileEarmarkTextFill, BsPeopleFill, BsPencilSquare } from 'react-icons/bs';
import Link from 'next/link';
import './navbar.css';
import blackLogo from '../public/BlackLogo-2.svg'
import Image from 'next/image';

const NavBar = () => {
  // TODO: add user to sidebar
  // TODO: change sidebar to navBar
  // const { user, error, isLoading } = useUser();
  // console.log('user provider', user?.name);

  return (
    <UserProvider>
      <div className='sidebar'>
        <div className='logo'>
          <Image src={blackLogo} alt='breezy logo'/>
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
        <div className='logout-sidebar'>
          <a href='/api/auth/logout'>
            <button className='logout-button'>LOGOUT</button>
          </a>
        </div>
      </div>
    </UserProvider>
  )
}

export default NavBar;
