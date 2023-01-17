import { getData } from '../../../utils/dataFetch';
import React from 'react';
import '../../../components/displayInvoiceList.css';
import Link from 'next/link';

export default async function FetchInvoiceList() {
  const data = await getData();
  const invoice = data;

  return (
    <>
      <table className='GeneratedTable'>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Client</th>
            <th>Date</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          {invoice.map((invoice) => (
            <tr key={invoice._id}>
              <td>
                <Link href={`/members-only/invoice/${invoice._id}`}>
                  {invoice.fullName}
                </Link>
              </td>
              <td>{invoice.clientFullName}</td>
              <td>{invoice.date}</td>
              <td>£{invoice.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
