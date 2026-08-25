import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT
    month,
    sales,
    SUM(sales) OVER(
      ORDER BY month
      ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
  FROM sales;
`;

  main()
    .catch(console.error)
    .finally(async () => {
      await prisma.$disconnect();
    });