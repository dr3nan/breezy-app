'use client'

import '../components/displayClient.css';

import React from 'react';
import Link from 'next/link';

function DisplayClients({ clientData}) {
  console.log(clientData);
  return (
    <div className='container'>
      <div className='grid'>
        <Link href={`/invoice/${clientData._id}`}>

        <div className='box'>
          <p>{clientData.clientFullName}</p>
          <p>{clientData.clientAddress}</p>
          <p>{clientData.clientPhoneNumber}</p>
          <p>{clientData.clientEmail}</p>
        </div>

        </Link>
      </div>
    </div>
  );
}

export default DisplayClients;
