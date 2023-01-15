'use client'

import '../components/displayClient.css';

import React from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

function DisplayClients({ clientData}) {

  return (
    <div className='container'>
      <div className='grid'>
        <Link href={`/members-only/invoice/${clientData._id}`}>

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
