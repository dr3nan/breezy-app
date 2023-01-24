import { getData } from '../../utils/dataFetch';
import React from 'react';
import DisplayInvoiceList from '../../components/displayInvoiceList';
import { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function FetchInvoiceList() {
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
      <Sidebar />
      <DisplayInvoiceList invoices={invoices} data-testid="displayInvoiceList" />
    </>
  );
};
