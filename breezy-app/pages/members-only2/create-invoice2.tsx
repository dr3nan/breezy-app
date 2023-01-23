import InvoiceForm from '../../components/invoice-form';
import { getData } from '../../utils/dataFetch';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default function CreateInvoice() {
  // TODO: find out what this call does and if it is useful for this component
  return (
    <>
      <UserProvider>
        <InvoiceForm />
      </UserProvider>
    </>
  );
};
