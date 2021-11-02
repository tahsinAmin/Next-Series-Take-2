import React from 'react'

export default function Vehicles({ list }) {
   return (
      <table className='w-11/12 mx-auto mt-12 border-b-4'>
         <thead className='border-b'>
            <tr>
            <th className='px-4 py-6 font-semibold'>Id</th>
            <th className='px-4 py-6 font-semibold'>Brand</th>
            <th className='px-4 py-6 font-semibold'>Model</th>
            <th className='px-4 py-6 font-semibold'>Owner Id</th>
            </tr>
         </thead>
         <tbody>
         {list.map(v => (
         <tr key={v.id} className='border-b'>
            <td className='px-4 py-6 text-center'>{v.id}</td>
            <td className='px-4 py-6 text-center'>{v.brand}</td>
            <td className='px-4 py-6 text-center'>{v.model}</td>
            <td className='px-4 py-6 text-center'>{v.ownerId}</td>
         </tr>
         ))}
         </tbody>
      </table>
   )
}

Vehicles.getInitialProps = async () => {
   const resp = await fetch('http://localhost:3000/api/vehicles');
   const json = await resp.json()
   return {list: json}
}
