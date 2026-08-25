import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT
    name,
    score,
    FIRST_VALUE(score) OVER(
      ORDER BY score DESC
    ) AS highest_score
  FROM "User";
`;

  const result = await prisma.$queryRaw`
  SELECT
    name,
    score,
    LAST_VALUE(score) OVER(
      ORDER BY score DESC
      ROWS BETWEEN UNBOUNDED PRECEDING
           AND UNBOUNDED FOLLOWING
    ) AS lowest_score
  FROM "User";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });