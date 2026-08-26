import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT *
  FROM "User"
 WITH average_age AS (
  SELECT AVG(age) AS avg_age
  FROM "User"
)
SELECT u.*
FROM "User" u
CROSS JOIN average_age a
WHERE u.age > a.avg_age;
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });