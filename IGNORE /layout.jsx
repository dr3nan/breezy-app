import CreateInvoice from "./create-invoice/page";
import Sidebar from "./page";

import React from "react";

export default function SidebarLayout({ children }) {
  return (
    <>
      <CreateInvoice/>
      <head />
      <body>{children}</body>
    </>
  );
}
