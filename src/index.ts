import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT *
  FROM "User"
  WHERE age > ALL (
    SELECT age
    FROM "User"
    WHERE age < 26
  );
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });