import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT
    name,
    score,
    RANK() OVER(ORDER BY score DESC) AS rank
  FROM "User";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });