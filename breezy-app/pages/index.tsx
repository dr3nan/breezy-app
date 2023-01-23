import React from 'react';
import LandingPage from '../components/landing-page';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function Page() {
  return (
    <>
      <UserProvider>
        <LandingPage data-testid="LandingPage" />
      </UserProvider>
      
    </>
  );
};