import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const users = await prisma.user.findMany({
    where: {
      name: {
        startsWith: "Kan",
        mode: "insensitive",
      },
    },
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });