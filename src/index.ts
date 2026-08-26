import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  SELECT *
  FROM "User"
  WHERE EXISTS (
  SELECT 1
  FROM "Post" p
  WHERE p."userId" = u.id
)
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });