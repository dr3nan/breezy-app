'use client'

import '../styles/globals.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// import { UserProvider } from '@auth0/nextjs-auth0/client';

function myApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default myApp;
