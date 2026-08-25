import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const users = await prisma.user.findMany({
    where: {
      createdAt: {
        gte: new Date("2026-08-01"),
      },
    },
  });
}
  main()
    .catch(console.error)
    .finally(async () => {
      await prisma.$disconnect();
    });