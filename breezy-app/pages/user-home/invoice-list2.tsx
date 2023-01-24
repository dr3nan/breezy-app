import { getData } from '../../utils/dataFetch';
import React from 'react';
import DisplayInvoiceList from '../../components/displayInvoiceList';
import { useState, useEffect } from 'react';
import ProvNav from '../../components/ProvNav';


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
      <ProvNav />
      <DisplayInvoiceList invoice={invoices} data-testid="displayInvoiceList" />
    </>
  );
};
