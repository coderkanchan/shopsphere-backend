import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT
    name,
    spending,
    RANK() OVER (
      ORDER BY spending DESC
    ) AS rank
  FROM "User";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });