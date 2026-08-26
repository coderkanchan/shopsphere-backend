import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const users = await prisma.$queryRaw`
  SELECT
    name,
    age,
    CASE
      WHEN age < 18 THEN 'Minor'
      WHEN age < 60 THEN 'Adult'
      ELSE 'Senior'
    END AS age_group
  FROM "User";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });