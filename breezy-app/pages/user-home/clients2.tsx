import { getData } from "../../utils/dataFetch";
import { useEffect, useState } from "react";
import { invoiceFields } from '../../utils/types';
import DisplayClients from "../../components/displayClients";
import Sidebar from "../../components/sidebar";

function Clients2() {
  const [invoices, setInvoices] = useState([])
  const fetchInvoices = async () => {
    const response = await getData();
    setInvoices(response)
  }

  useEffect(() => {
    fetchInvoices()
  }, [])

  return (
    <>
      <Sidebar />
      {invoices.map((data: invoiceFields) => (
        <div key={String(data._id)}>
          <DisplayClients key={String(data._id)} clientData={data} />
        </div>
      ))}
    </>

  )
}
export default Clients2;