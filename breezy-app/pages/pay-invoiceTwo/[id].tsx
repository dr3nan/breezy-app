import { getInvoiceDataById } from '../../utils/dataFetch';
import React from 'react';
import ClientViewInvoice from '../../components/client-view-invoice';
import { Params } from '../../utils/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { invoiceFields } from '../../utils/types';


export default function FetchInvoice({ params }: Params) {
  const [invoice, setInvoice] = useState({} as invoiceFields)
  const router = useRouter();
  const invoiceNumber = router.asPath.match(/\d+/g);
  console.log(router);
  console.log(router.asPath)
  console.log(invoiceNumber)

  const fetchInvoices = async () => {
    if (invoiceNumber) {
      try {
        const response = await getInvoiceDataById(String(invoiceNumber[0]));
        console.log('response is: ', response[0])
        setInvoice(response[0])
      } catch (error) {
        console.log('error in getInvoiceDataById: ', error)
      }
    }
  }

  console.log('invoice is :', invoice)
  const finalRate: Number = invoice.rate;
  const amount: String = `£${finalRate}`;
  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(invoice.date);


  useEffect(() => {
    fetchInvoices()
  }, [router])

  function GetDate(date: Number | String ) {
    let date2;
    if (typeof date === 'number') date2 = new Date(Number(date));
    if (typeof date === 'string') date2 = new Date(String(date));
    

    let month = date2?.toLocaleString([], {
      month: 'numeric',
    });

    let day = date2?.toLocaleString([], {
      day: 'numeric',
    });

    let year = date2?.toLocaleString([], {
      year: 'numeric',
    });

    if (Number(month) < 10) {
      month = `0${month}`;
    };

    if (Number(day) < 10) {
      day = `0${day}`;
    };

    return `${day}/${month}/${year}`;
  }

  return (
    <>
      <ClientViewInvoice
        invoice={invoice}
        amount ={amount}
        currentDate={currentDate}
        dueDate={dueDate}
      />
    </>
  );
};
