import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });