import '../styles/globals.css';
import Sidebar from './sidebar/page';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {
        <div>
          <Sidebar />
        </div>
      }
      <head />
      <body>{children}</body>
    </html>
  );
}
