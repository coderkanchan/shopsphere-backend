import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
const result = await prisma.$queryRaw`
  SELECT
    name,
    spending,
    FIRST_VALUE(spending) OVER (
      ORDER BY spending DESC
    ) AS highest_spending
  FROM "User";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  }); 
  

