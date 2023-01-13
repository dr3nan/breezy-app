import Image from 'next/image';
import picture1 from '../../public/pexels-pixabay-268533.jpeg';
import React from 'react';
import DisplayClients from '../../components/displayClients';
import { getData } from '../../utils/dataFetch';

export default async function FetchClients() {
  const data = await getData();
  console.log(data)
  
  return (
    <>
      {data.map((data) => (
        <div key={data._id}>
        {/* <Link href={`/invoice/${data._id}`}>Invoice: {data._id} Phone Number: {data.phoneNumber}</Link> */}
        <DisplayClients  clientData = {data}/>
        </div>
      ))}
    </>
   
  )
}
