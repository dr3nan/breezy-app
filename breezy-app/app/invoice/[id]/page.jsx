import Link from 'next/link';
import { getData } from '../../../utils/dataFetch';

export default async function displayInvoiceList({params}) {
  const data = await getData();
  console.log(params);
  return (
    <div>
    <p>Hello</p>
    </div>
  );
}
