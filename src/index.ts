import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  const users = await prisma.user.findMany({
    where: {
      id: {
        notIn: [1, 2, 3],
      },
    },
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });