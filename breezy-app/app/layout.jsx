import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <header></header>
        <main className='flex'>
          <div className='bg-blue-300 h-screen w-72 p-10'>
            <div className=''>
              <h1 className=' bg-yellow-300'>LOGO</h1>
            </div>
            <div className=' mt-40'>
              <div className=' space-y-10'>
                <div>
                  <Link href='/create-invoice'>
                    <h1 className='bg-red-300'>CREATE INVOICE</h1>
                  </Link>
                </div>
                <div>
                  <Link href='/invoice-list'>
                    <h1 className='bg-pink-300'>INVOICES</h1>
                  </Link>
                </div>
                <div>
                  <Link href='/clients'>
                    <h1 className='bg-green-300'>CLIENTS</h1>
                  </Link>
                </div>
                <div>
                  <Link href='/stats'>
                    <h1 className='bg-orange-300'>STATS</h1>
                  </Link>
                </div>
                <div>
                  <Link href='/'>
                    {' '}
                    <h1 className='bg-purple-300'>HOME</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>

            {/* <div className='flex flex-row '>
              <h1 className='bg-red-300 text-6xl'>Breezy</h1>
            </div> */}
      <div className = "container">
            {children}

      </div>
        </main>
      </body>
    </html>
  );
}
