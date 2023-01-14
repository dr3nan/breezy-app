'use client';
import '../components/displayClient.css'
import React from 'react';
import Link from 'next/link';

function DisplayInvoiceList({ invoiceData }) {
  
  console.log(invoiceData);
  return (
    <div className="container">
      <div className='grid'>
      <Link href={`/members-only/invoice/${invoiceData._id}`}>

        <div className='box' id='invoice-box'>
          <p>{invoiceData.fullName}</p>
          <p>{invoiceData.address}</p>
          <p>{invoiceData.phoneNumber}</p>
          <p>{invoiceData.email}</p>
        </div>

        </Link>
      </div>
    </div>
  );
}

export default DisplayInvoiceList;




// const [invoiceList, setInvoiceList] = useState([])

  // useEffect(() => {
  //   getData().then((data) => {
  //     setInvoiceList(data)
  //   })
  // }, [])

  // setInvoiceList(invoiceData)