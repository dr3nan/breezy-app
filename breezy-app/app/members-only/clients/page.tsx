import React from 'react';
import DisplayClients from '../../../components/displayClients';
import { getData } from '../../../utils/dataFetch';
import { invoiceFields } from '../../../utils/types';

export default async function FetchClients() {
  const data = await getData();

  return (
    <>
      {data.map((data: invoiceFields) => (
        <div key={String(data._id)}>
          <DisplayClients key={String(data._id)} clientData={data} />
        </div>
      ))}
    </>
  );
};
