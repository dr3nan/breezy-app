import React from 'react';
import LandingPage from '../components/landing-page';
import { UserProvider, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function Page() {
  return (
    <main aria-label='home' >
      <title>Breezy app - Home</title>
      <h1 className='invisible-heading-home'>Home</h1>
      <UserProvider>
        <LandingPage data-testid="LandingPage" />
      </UserProvider>
    </main>
  );
};


export default Page

