import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "./people";
const prisma = new PrismaClient();

export default authenticated(async function getAllVehices(req: NextApiRequest, res: NextApiResponse) {
   
   const vehicles = await prisma.vehicle.findMany()

   res.json(vehicles);

});