import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getAllVehices(req, res) {
   const vehicle = await prisma.vehicle.findFirst({
      where: {
         id: parseInt(req.query.id)
      }
   })

   res.json(vehicle);

}