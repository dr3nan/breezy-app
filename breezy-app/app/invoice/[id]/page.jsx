import { getDataById } from '../../../utils/dataFetch';
import DisplayInvoice from '../../../components/displayInvoice';
import React from 'react';

export default async function FetchInvoice({ params }) {
  const id = params.id;
  const data = await getDataById(id);

  console.log(data);

  return (
    <div>
      <DisplayInvoice invoice={data} />
    </div>
  );
}

// const {
//   fullName,
//   phoneNumber,
//   email,
//   clientFullName,
//   clientAddress,
//   clientPhoneNumber,
//   clientEmail,
//   quantity,
//   date,
// } = data;
