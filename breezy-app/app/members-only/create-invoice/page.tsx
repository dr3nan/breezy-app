import InvoiceForm from '../../../components/invoice-form';
import { getData } from '../../../utils/dataFetch';

export default async function CreateInvoice() {
  // TODO: find out what this call does and if it is useful for this component
  const data = await getData();

  return (
    <>
      <InvoiceForm />
    </>
  );
}
