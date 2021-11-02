import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getAllVehices(req: NextApiRequest, res: NextApiResponse) {
   
   const vehicles = await prisma.vehicle.findMany()

   res.json(vehicles);

}