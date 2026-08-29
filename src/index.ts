import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT
    id,
    amount,
    LAG(amount) OVER (
      ORDER BY "createdAt"
    ) AS previous_amount
  FROM "Order";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });