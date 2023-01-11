import Link from "next/link"

export default function Sidebar() {
  return (
  <div>
<div className="flex">

 <h1>THIS IS A SIDEBAR</h1>

    <Link href="/sidebar/create-invoice">
    <h1>CREATE INVOICE</h1>
      </Link>

      <Link href="/sidebar/invoices">
        <div class="bg-slate-300"><h1>INVOICES</h1></div>

      </Link>
      <Link href="/sidebar/stats">
    <h1>STATS</h1>
      </Link> 
</div>
  </div>

      

      
  
  
  )
}
