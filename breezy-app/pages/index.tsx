import React from 'react';
import LandingPage from '../components/landing-page';
import { UserProvider, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function Page() {
  return (
    <>
      <UserProvider>
        <LandingPage data-testid="LandingPage" />
      </UserProvider>
    </>
  );
};


export default Page

