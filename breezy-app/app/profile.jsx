'use client'

// import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
  const { user, error, isLoading } = useUser();
  console.log(user) 
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  if (user) {
    return (
      <div>
        <h1> Welcome {user.name}!</h1>
        <a href="/api/auth/logout">LOGOUT</a>
      </div>
    )
  }

  return <a href="/api/auth/login">LOGIN</a>
  
  
  return (
    user && (
      <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}