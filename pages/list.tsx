import Head from 'next/head'
import Link from 'next/link'
import { VehiclePerson } from './api/VehiclePerson';

export interface ListProps {
  ownersList?: VehiclePerson[];
}

export default function List({ ownersList } : ListProps) {
  const people = [
    {vehicle:'car', name:'bruno'},
    {vehicle:'bike', name:'John'},
    {vehicle:'plane', name:'Mike'}
  ];

  return (
    <div className="">
      <Head>
        <title>Lists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {ownersList?.map((e,index) => (
          <div key={index}>
            <Link as={`/${e.vehicle}/${e.ownerName}`} href='/[vehicle]/[person]'>
              <a className='text-blue-600 focus:text-blue-900 underline'>Navigate to {e.ownerName}'s {e.vehicle}</a>
            </Link>
          </div>
        ))}
      </main>

      <footer className="">
      </footer>
    </div>
  )
}

List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4001/vehicles');
  const ownersList : VehiclePerson[] | undefined = await response.json();
  return {ownersList:ownersList}
}