

import InvoiceForm from '../../components/invoice-form';
import getData from '../../utils/getData';


// async function submitData(data) {
//   try {
//     const res = await fetch(`${uri}/api/hello`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     return res.json();
//   } catch (error) {
//     console.log(error)
//   }
// }

export default async function CreateInvoice() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      {data.map((data) => (

      <InvoiceForm key = {data._id} user={data} />
      ))}
    </div>
  );
}

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
