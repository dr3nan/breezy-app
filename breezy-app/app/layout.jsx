import '../styles/globals.css';
import Home from './page';
import Link from 'next/link';
import CreateInvoice from './create-invoice/page';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <header>
        </header>
        <main className='flex'>
            <div className='bg-blue-300 h-screen w-72 p-10'>
              <div className=''>
                <h1 className=' bg-yellow-300'>LOGO</h1>
              </div>
              <div className=' mt-80'>
                <div className=' space-y-10'>
                  <div>
                    <Link href='/create-invoice'>
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
                    <h1 className='bg-orange-300'>STATS</h1>
                  </div>
                  <div>
                    <Link href="/"> <h1 className='bg-purple-300'>HOME</h1></Link>
                  </div>
                </div>
              </div>
            </div>


          <div>

          <div className='flex p-7 w-96'>
            <h1 className='bg-red-300 text-6xl text-center h-72'>Breezy</h1>
          </div>

          {children}

          </div>
          

        </main>
      </body>
    </html>
  );
}
