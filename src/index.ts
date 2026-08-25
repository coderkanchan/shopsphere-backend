import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const startDate = new Date("2026-08-01");
  const endDate = new Date("2026-09-01");

  const users = await prisma.user.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lt: endDate,
      },
    },
  });
}
main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });