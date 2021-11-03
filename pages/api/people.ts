import { NextApiHandler, NextApiRequest, NextApiResponse,  } from "next";
import { PrismaClient } from "@prisma/client";
import {verify} from 'jsonwebtoken';


const prisma = new PrismaClient();

export const authenticated = (fn:NextApiHandler) => async (req:NextApiRequest, res: NextApiResponse) => {
   // invalid token
   const secret = process.env.secret;
   verify(req.headers.authorization, secret , async function(err, decoded) {
      if(!err && decoded){
         return await fn(req, res)
      }
      res.status(500).json({message: 'Sorry you\'re not authenticated'});
   });  
}

export default authenticated(async function getPeople(req, res) {

   const people  = await prisma.person.findMany({
      select: {
         id:true,
         name: true,
         email: true
      },
    })

   res.json(people);
})