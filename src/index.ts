import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT
    name,
    department,
    score,
    ROW_NUMBER() OVER(
      PARTITION BY department
      ORDER BY score DESC
    ) AS row_num
  FROM "User";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });