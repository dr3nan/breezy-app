import { Suspense } from 'react';
import InvoiceForm from '../../../components/invoice-form';
import { getData } from '../../../utils/dataFetch';

export default  function CreateInvoice() {

  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <InvoiceForm />
      </Suspense>
    </>
  );
}
