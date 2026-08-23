import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const users = await prisma.$queryRaw`
  SELECT
    name,
    age,
    ROW_NUMBER() OVER(ORDER BY age DESC) AS row_num
  FROM "User";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });