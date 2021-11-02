import { useRouter } from "next/router"

export default function bruno() {
   const router = useRouter();
   return (
      <div className='text-2xl text-green-400'>
         {router.query.person}'s {router.query.vehicle}
      </div>
   )
}
