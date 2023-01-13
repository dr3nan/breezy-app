import { getDataById } from '../../../utils/dataFetch';

import DisplayInvoice from '../../../components/displayInvoice';
export default async function displayInvoice({ params }) {
  const id = params.id;
  const data = await getDataById(id);

  const {
    fullName,
    phoneNumber,
    email,
    clientFullName,
    clientAddress,
    clientPhoneNumber,
    clientEmail,
    quantity,
    date,
  } = data;

  return (
    <div>
      <DisplayInvoice invoice={data} />
    </div>
  );
}
