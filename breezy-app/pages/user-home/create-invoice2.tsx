import InvoiceForm from '../../components/invoice-form';
import { getData } from '../../utils/dataFetch';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Sidebar from '../../components/sidebar';

export default function CreateInvoice() {
  // TODO: find out what this call does and if it is useful for this component
  return (
    <>
      <main aria-label='create-invoice' >
        <title>Breezy app - Create invoice</title>
        <h1 className='invisible-heading-create-invocie'>Create Invoice</h1>
        <Sidebar />
        <InvoiceForm />
      </main>
    </>
  );
};
