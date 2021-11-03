import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

export default async function signUp(req, res) {
   const prisma = new PrismaClient();

   if(req.method === 'POST'){
      hash(req.body.password, 10,  async function(err, hash) {
         const result = await prisma.person.create({
            data: {
               name: req.body.name,
               email: req.body.email,
               password: hash
            },
         })
   
         const person = await prisma.person.findMany()
         res.json(person);
     });
   } else {
      res.status(405).json({message: 'We only support POST!'});
   }
}