import { getData } from '../../utils/dataFetch';
import React from 'react';
import DisplayInvoiceList from '../../components/displayInvoiceList';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function FetchInvoiceList() {
  const [invoices, setInvoices] = useState([])
  const { user, error, isLoading } = useUser();
  if(user) console.log('user in invoice-list is: ', user)

  const fetchInvoices = async () => {
    const response = await getData(user?.sub as String);
    setInvoices(response)
  }

  useEffect(() => {
    fetchInvoices()
  }, [user])

  return (
    <>
      <main aria-label='invoices-view' >
        <title>Breezy app - Invoices</title>
        <h1 className='invisible-heading-invoice-list'>Invoice List</h1>
        <Sidebar />
        <DisplayInvoiceList invoices={invoices} data-testid='displayInvoiceList' />
      </main>
    </>
  );
};

export default withPageAuthRequired(FetchInvoiceList)
