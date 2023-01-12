// 'use client'

import Link from 'next/link';


const uri = 'http://localhost:3000';

async function getData() {
  const res = await fetch(`${uri}/api/hello`);
  if (!res.ok) {
    throw new Error('failed to fetch data');
  }
  return res.json();
}

async function submitData(data) {
  try {
    const res = await fetch(`${uri}/api/hello`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (error) {
    console.log(error)
  }
}

export default async function CreateInvoice() {
  let info = await getData();

  // const[name, setName] = useState("")
  console.log(info);
  return (
    <div>
      <div className='flex flex-col m-20 h-40 bg-red-500'>
        {info.map((info) => (
          <div key={info._id}>
            <h1></h1>
          </div>
        ))}
      </div>
      <input className=' bg-yellow-300' />
    </div>
  );
}
