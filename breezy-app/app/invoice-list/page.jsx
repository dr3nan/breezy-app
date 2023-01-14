
import Link from 'next/link';
import { getData } from '../../utils/dataFetch';
import React from 'react';
import DisplayInvoiceList from '../../components/displayInvoiceList';

export default async function FetchInvoiceList() {
    const data = await getData();
    
    return (
      <div>
        {data.map((data) => (
          <div key={data._id}>
          {/* <Link href={`/invoice/${data._id}`}>Invoice: {data._id} Phone Number: {data.phoneNumber}</Link> */}
          <DisplayInvoiceList invoiceData = {data}/>
          </div>
        ))}
      </div>
     
    )
  }
