
import React from 'react';
import DisplayClients from '../../../components/displayClients';
import { getData } from '../../../utils/dataFetch';

export default async function FetchClients() {
  const data = await getData();
  console.log(data) 

  return (
    <>
      {data.map((data) => (
        <div key={data._id}> {console.log(data)}
        {/* <Link href={`/invoice/${data._id}`}>Invoice: {data._id} Phone Number: {data.phoneNumber}</Link> */}
        <DisplayClients  clientData = {data}/>
        </div>
      ))}
    </>
   
  )
}
