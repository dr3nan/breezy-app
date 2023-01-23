import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function InvoiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserProvider>
        <section>{children}</section>
      </UserProvider>
    </>
  )
};
