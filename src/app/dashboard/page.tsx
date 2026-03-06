"use client"

import { useEffect, useState } from "react"

export default function Dashboard(){

const [invoices,setInvoices]=useState([])

useEffect(()=>{

fetch("/api/invoices")
.then(res=>res.json())
.then(data=>setInvoices(data))

},[])

async function viewInvoice(name:string){

const res=await fetch(`/api/invoice/${name}`)
const data=await res.json()

window.open(data.url,"_blank")

}

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">
Ribionic CA Portal
</h1>

<table className="w-full border">

<thead>
<tr className="border">
<th className="p-2">Invoice</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{invoices.map((inv:any)=>(
<tr key={inv.name} className="border">

<td className="p-2">{inv.name}</td>

<td>
<button
className="bg-blue-600 text-white px-3 py-1 rounded"
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

)

}