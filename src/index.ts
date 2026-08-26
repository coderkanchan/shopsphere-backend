import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT CAST(age AS TEXT)
  FROM "User";
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });