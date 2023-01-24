
import React from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link'

export default function ProvNav() {

  return (
    <div className="provNav">
        <div className="navBarCenter">
          <Link href="/user-home/invoice-list2">
            <button className="navButton">Invoices</button>
          </Link>      
          <Link href="/user-home/create-invoice2">
            <button className="navButton">Create Invoice</button>
          </Link>
          <Link href="/user-home/clients2">
            <button className="navButton">Clients List</button>
          </Link>
        </div>
    </div>
  );
}