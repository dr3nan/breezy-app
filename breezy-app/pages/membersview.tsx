import React from 'react';
import { useState, useEffect } from 'react';
import DisplayClients from '../components/displayClients';

export default function MembersView() {
  const [ invoiceData, setInvoiceData ] = useState([])
  const fetchInvoieData = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    console.log('data is: ', data);
    // setInvoiceData(response);
  };

  useEffect(() => {
    fetchInvoieData();
  },[])
  
  console.log('invvoiceData is: ', invoiceData)

  

  return (
    <>
    <h1>HELLO</h1>
    {
    invoiceData && invoiceData.map((invoice) => (
      <>
        <h1>hi</h1>
        <div key={invoice['_id']}>
          <DisplayClients key={invoice['_id']} clientData={invoice} />
        </div>
      </>
    ))
    }
    </>
 
  );
}
