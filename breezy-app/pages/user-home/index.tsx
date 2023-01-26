import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Sidebar from '../../components/navbar';

export default function Index() {
  return (
    <>
      <h1>Index</h1>
      <Sidebar />
    </>
  );
};