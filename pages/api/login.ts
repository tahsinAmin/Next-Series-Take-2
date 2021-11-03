import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcrypt";
import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from "next";

export default async function login(req : NextApiRequest, res: NextApiResponse) {
   const prisma = new PrismaClient();

   if(req.method === 'POST'){
      const person = await prisma.person.findFirst({
         where: {
            email:req.body.email
         }
      });
      
      compare(req.body.password, person.password, async function(err, result) {
         if(!err && result){
            const claims = { sub:person.id, myPersonEmail: person.email };
            const secret = process.env.secret;
            const jwt = sign( claims, secret,  { expiresIn: '1h' });
            res.json({awthToken: jwt});
         } else {
            res.json({message: 'OOPS!! Something went wrong'});
         }
      });
      

   } else {
      res.status(405).json({message: 'We only support POST'});
   }
}
