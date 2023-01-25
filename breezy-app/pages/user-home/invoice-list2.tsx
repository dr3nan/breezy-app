import { getData } from '../../utils/dataFetch';
import React from 'react';
import DisplayInvoiceList from '../../components/displayInvoiceList';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';


export default function FetchInvoiceList() {
  const [invoices, setInvoices] = useState([])

  const fetchInvoices = async () => {
    const response = await getData();
    setInvoices(response)
  }

  useEffect(() => {
    fetchInvoices()
  }, [])

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
