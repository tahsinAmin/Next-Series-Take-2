import Head from 'next/head'
import Link from 'next/link'

export default function Details() {
  const people = [
    {vehicle:'car', name:'bruno'},
    {vehicle:'bike', name:'John'},
    {vehicle:'plane', name:'Mike'}
  ];

  return (
    <div className="">
      <Head>
        <title>Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {people.map(e => (
          <div>
            <Link as={`/${e.vehicle}/${e.name}`} href='/[vehicle]/[person]'>
              <a className='text-blue-600 underline'>Navigate to {e.name}'s {e.vehicle}</a>
            </Link>
          </div>
        ))}
      </main>

      <footer className="">
      </footer>
    </div>
  )
}