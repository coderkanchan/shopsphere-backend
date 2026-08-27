import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  WITH adult_users AS (
    SELECT *
    FROM "User"
    WHERE age >= 18
  )
  SELECT *
  FROM adult_users;
`;


}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });