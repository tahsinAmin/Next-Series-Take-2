// import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function getPersonById(req, res) {
   const prisma = new PrismaClient();

   if(req.method === 'PUT'){
      const person = await prisma.person.update({
         where: { 
            id: parseInt(req.query.id) },
            data: { 
               name: req.body.name,
               email: req.body.email
            }
       })
   }

   const person = await prisma.person.findFirst({
      where: {
         id: parseInt(req.query.id)
      }
   })

   res.json(person);

}
