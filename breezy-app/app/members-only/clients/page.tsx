import React from 'react';
import DisplayClients from '../../../components/displayClients';
import { getData } from '../../../utils/dataFetch';
import { invoiceFields } from '../../../utils/types';

export default async function FetchClients() {
  const data = await getData();
  console.log('data from api', data);

  return (
    <>
      {data.map((data: invoiceFields) => (
        <div key={data._id}>
          <DisplayClients key={data._id} clientData={data} />
        </div>
      ))}
    </>
  );
}
