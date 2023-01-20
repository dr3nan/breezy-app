import { getInvoiceDataById } from '../../../utils/dataFetch';
import React from 'react';
import ClientViewInvoice from '../../../components/client-view-invoice';
import { Params } from '../../../utils/types';

export default async function FetchInvoice({ params }: Params) {
  console.log('params', params);
  const id = params.id;
  console.log('id from params', id);
  const data = await getInvoiceDataById(id);
  const invoice = data;

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
    }
    if (Number(day) < 10) {
      day = `0${day}`;
    }

    const formatedDate = `${day}/${month}/${year}`;

    return formatedDate;
  }

  const finalRate: Number = invoice.quantity * invoice.rate;

  const amount: String = `£${finalRate}`;
  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(invoice.date);

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
