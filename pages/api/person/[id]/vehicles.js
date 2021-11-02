import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getAllVehiclesByPersonId(req, res) {
   const allVehicles = await prisma.vehicle.findMany({
      where: {
         ownerId: parseInt(req.query.id)
      }
   })

   res.json(allVehicles);

}

