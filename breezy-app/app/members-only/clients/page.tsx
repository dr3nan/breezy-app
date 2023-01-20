import React from 'react';
import DisplayClients from '../../../components/displayClients';
import { getData } from '../../../utils/dataFetch';
import { invoiceFields } from '../../../utils/types';

export default async function FetchClients() {
  const data = await getData();

  return (
    <>
      {data.map((data: invoiceFields) => (
        <div key={data._id}>
          <DisplayClients key={data._id} clientData={data} />
        </div>
      ))}
    </>
  );
};
