'use client';

import '../styles/globals.css';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <html lang='en'>
        <head />
        <body>{children}</body>
      </html>
    </UserProvider>
  );
};
