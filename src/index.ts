import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  await prisma.$queryRaw`
  SELECT *
  FROM "Product"
  WHERE id = 10
  FOR UPDATE
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });


