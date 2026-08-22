import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  WITH adults AS (
    SELECT *
    FROM "User"
    WHERE age >= 18
  )
  SELECT *
  FROM adults;
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });