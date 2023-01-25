'use client'

import '../styles/globals.css';
import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// TODO: reload home page with user provider from Auth0, faster loading
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { AppProps } from 'next/app';
import { invoiceFields } from '../utils/types';
import reportAccessibility from '../utils/reportAccessibility'

function myApp({ Component, pageProps }: AppProps<invoiceFields>) {

  return (
    <main aria-label='home' >
      <title>Breezy app - Home</title>
      <h1 className='invisible-heading-home'>Home</h1>
      <UserProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </UserProvider>
    </main>
  );
};

reportAccessibility(React)

export default myApp;
