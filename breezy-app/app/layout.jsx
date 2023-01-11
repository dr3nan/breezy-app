import '../styles/globals.css';
import CreateInvoice from './sidebar/create-invoice/page';
import Sidebar from './sidebar/page';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {
        <div>
          <Sidebar  />
           {/* <CreateInvoice/>  */}
          
        </div>
      }
      <head />
      <body>{children}</body>
    </html>
  );
}
