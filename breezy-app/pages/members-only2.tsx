import React from 'react';
import { getData } from '../utils/dataFetch';
import DisplayClients from '../components/displayClients';
import { useState, useEffect } from 'react'


export default async function FetchClients() {
  const [ invoiceData, setInvoiceData ] = useState([])

/*   const fetchInvoieData = async () => {
    const response = await fetch('/api/hello');
    console.log('response is: ', response);
    const data = await response.json();
    console.log('response is: ', data);
    // setInvoiceData(response);
  };

  useEffect(() => {
    fetchInvoieData();
  },[])
  
  console.log(invoiceData) */


  /* const data = await getData();
  console.log(data); */

  return (
    <>
      {
      invoiceData ? 
      invoiceData?.map((invoice) => (
        <div key={invoice._id}>
          <DisplayClients key={invoice._id} clientData={invoice} />
        </div>
      ))
    : null}
    </>
  );
}
