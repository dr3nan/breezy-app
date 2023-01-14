
import '../../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/For Web/png/Black logo - no background.png';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Profile from './profile';


// import { useUser } from '@auth0/nextjs-auth0/client';

export default function Layout({ children }) {
  return (
       <UserProvider> 
    <html lang='en'>
      <head />
        <body>
          <div className='flex'>
            <div className=' bg-blue-200 h-screen w-72 p-10'>
              <div className=''>
                <Image src={Logo} alt='Breezy Logo' width={1000} height={500} />
              </div>
              <div className=' mt-40'>
                <div className=' space-y-10'>
                  <div>
                    <Link href='/members-only/create-invoice'>
                      <h1 className=''>CREATE INVOICE</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/invoice-list'>
                      <h1 className=''>INVOICES</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/clients'>
                      <h1 className=''>CLIENTS</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href='/members-only/stats'>
                      <h1 className=''>STATS</h1>
                    </Link>
                  </div>
                  <Profile></Profile>
                </div>
              </div>
            </div>

            <div className='container'>{children}</div>
          </div>
        </body>
    </html>
     </UserProvider> 
  );
}
