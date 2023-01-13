
import Link from 'next/link';
import { getData } from '../../utils/dataFetch';

export default async function displayInvoiceList() {
    const data = await getData();
    
    console.log(data);
    return (
      <div>
        {data.map((data) => (
          <div key={data._id}>
          <Link href={`/invoice/${data._id}`}>Invoice: {data._id}</Link>
          
          </div>
        ))}
      </div>
     
    )
  }
