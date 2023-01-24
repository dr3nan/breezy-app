/* import { getInvoiceDataById } from '../../utils/dataFetch';
import React from 'react';
import ClientViewInvoice from '../../components/client-view-invoice';
import { Params } from '../../utils/types';
import { useEffect, useState } from 'react';

export default function FetchInvoice({ params }: Params) {
  const [invoice, setInvoice] = useState({})

  const id = params.id;

  const fetchInvoices = async () => {
    const response = await getInvoiceDataById(id);;
    setInvoice(response)
    const finalRate: Number = invoice.quantity * invoice.rate;
    const amount: String = `£${finalRate}`;
    const currentDate = GetDate(Date.now());
    const dueDate = GetDate(invoice.date);
  }

  useEffect(() => {
    fetchInvoices()
  }, [])

  function GetDate(date: number) {
    const date2 = new Date();

    let month = date2.toLocaleString([], {
      month: 'numeric',
    });

    let day = date2.toLocaleString([], {
      day: 'numeric',
    });

    let year = date2.toLocaleString([], {
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
 */