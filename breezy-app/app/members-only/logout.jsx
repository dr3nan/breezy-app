'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Button, ButtonGroup } from '@chakra-ui/react';

export default function Logout() {
  return (
    <ChakraProvider>
      <a href='/api/auth/logout'>
        <Button colorScheme='teal' size='lg'>LOGOUT</Button>
      </a>
    </ChakraProvider>
  );
}
