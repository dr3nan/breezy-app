
import Link from 'next/link';
import CreateInvoice from './create-invoice/page';

export default function Sidebar() {
  return (
    <div className='flex'>
      <div className='bg-blue-300 h-screen w-72 p-10'>
        <div className=''>
          <h1 className=' bg-yellow-300'>LOGO</h1>
        </div>
        <div className=' mt-80'>
          <div className='flex flex-col space-y-10'>
            <div>
              <Link href='/sidebar/create-invoice'>
              <h1 className='bg-red-300'>CREATE INVOICE</h1>
                </Link>
            </div>
            <div>
              <h1 className='bg-pink-300'>INVOICES</h1>
            </div>
            <div>
              <h1 className='bg-green-300'>CLIENTS</h1>
            </div>
            <div>
              <h1 className='bg-purple-300'>STATS</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 p-7'>
        <h1 className='bg-red-300 text-6xl text-center'>Breezy</h1>
        {/* <CreateInvoice/> */}
      </div>
    </div>

    /* <Link href="/sidebar/create-invoice">
<h1>CREATE INVOICE</h1>
  </Link>

  <Link href="/sidebar/invoices">
    <div class="bg-slate-300"><h1>INVOICES</h1></div>

  </Link>
  <Link href="/sidebar/stats">
<h1>STATS</h1>
  </Link>  */
  );
}
