import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function getPeople(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();
   const people = await prisma.person.findMany()

   res.json(people);

}