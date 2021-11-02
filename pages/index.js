import Head from 'next/head'
import {PrismaClient} from '@prisma/client'
import { useState } from 'react'

const prisma = new PrismaClient()

export default function Home({ data }) {
  const [people, setPeople] = useState(data.people)
  const vList = [];
  const vehicles = data.vehicles


  for (let i= 0; i< vehicles.length; i++){
    vList.push( {id: vehicles[i].ownerId, name:vehicles[i].brand.concat(" " +vehicles[i].model)})
  }

  for (let i= 0; i< vList.length; i++){
    for (let j= i+1; j< vList.length; j++){
      if(vList[i].id == vList[j].id ){
        console.log(true);
        vList[i].name = vList[i].name.concat(", " + vList[j].name)
        console.log(vList.splice(j, 1));
      }
    }
  }

  console.log(vList);

  return (
    <div className="box-border">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-11/12 my-12 mx-auto">
        <table className="mx-auto">
          <thead className='bg-green-300 text-white'>
            <tr>
              <th className="border border-green-600 px-4 py-2">Name</th>
              <th className="border border-green-600 px-4 py-2">Email</th>
              <th className="border border-green-600 px-4 py-2">Vehicles</th>
            </tr>
          </thead>
          <tbody>
          {people.map((p) => {
            let list = vList.filter(vL => vL.id === p.id);
            console.log(list)
            return (
              <tr key={p.id}>
                <td className="border border-green-600 px-4 py-2">{p.name}</td>
                <td className="border border-green-600 px-4 py-2">{p.email}</td>
                <td className="border border-green-600 px-4 py-2">{list[0].name }</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}


export async function getServerSideProps() {

  const people = await prisma.person.findMany()
  const vehicles = await prisma.vehicle.findMany()

  return {
      props: {
          data: {
             people,
             vehicles
          }
      }
  }
}
