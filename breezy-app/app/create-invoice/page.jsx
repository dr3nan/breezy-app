import InvoiceForm from '../../components/invoice-form';
import { getData, submitData } from '../../utils/dataFetch';

export default async function CreateInvoice(data) {
  const invoice = await submitData(data);
  // console.log(data);
  // console.log(invoice);

  return (
    <div>
      <InvoiceForm invoice={invoice} />
    </div>
  );
}

// export async function displayInvoice() {
//   const data = await getData();
//   console.log(data);
//   return (
//     <div>
//       {data.map((data) => (
//         <InvoiceForm key={data._id} user={data} />
//       ))}
//     </div>
//   );
// }

/* <div>
      <div className='flex flex-col m-20 h-40 bg-red-500'>
        {info.map((info) => (
          <div key={info._id}>
            <h1></h1>
          </div>
        ))}
      </div>
      <input className=' bg-yellow-300' />
    </div> */
