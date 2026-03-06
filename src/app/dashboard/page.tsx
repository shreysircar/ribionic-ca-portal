"use client"

import { useEffect, useState } from "react"

export default function Dashboard(){

const [invoices,setInvoices]=useState<any[]>([])

useEffect(()=>{

fetch("/api/invoices")
.then(res=>res.json())
.then(data=>setInvoices(data))

},[])

async function viewInvoice(name:string){

const match = name.match(/(\d{2}-\d{2})/)

const fy = match ? `20${match[1]}` : "2025-26"

const res = await fetch(`/api/invoice/${fy}/${name}`)
const data = await res.json()

window.open(data.url,"_blank")

}

return(

<div>

<h1 className="text-3xl font-bold mb-6">
Invoices
</h1>

<div className="bg-slate-800 rounded-xl overflow-hidden">

<table className="w-full">

<thead className="bg-slate-700 text-left">

<tr>
<th className="p-4">Invoice</th>
<th className="p-4">Action</th>
</tr>

</thead>

<tbody>

{invoices.map((inv)=>(
<tr key={inv.name} className="border-t border-slate-700">

<td className="p-4">{inv.name}</td>

<td className="p-4">

<button
className="bg-teal-600 hover:bg-teal-700 px-4 py-1 rounded"
onClick={()=>viewInvoice(inv.name)}
>
View
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}