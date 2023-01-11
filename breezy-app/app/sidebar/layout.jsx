import CreateInvoice from "./create-invoice/page";
import Sidebar from "./page";

export default function SidebarLayout({ children }) {
  return (
    <div>
      <Sidebar/>
      {/* <CreateInvoice/> */}
      <head />
      <body>{children}</body>
    </div>
  );
}
