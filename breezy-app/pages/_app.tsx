'use client'

import '../styles/globals.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// TODO: reload home page with user provider from Auth0, faster loading
import { UserProvider } from '@auth0/nextjs-auth0/client';

function myApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

export default myApp;
