import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT
    product,
    month,
    sales,
    LAG(sales) OVER(
      PARTITION BY product
      ORDER BY month
    ) AS previous_sales
  FROM sales;
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });