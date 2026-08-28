import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.$queryRaw`
  WITH ranked_posts AS (
    SELECT
      p.*,
      ROW_NUMBER() OVER (
        PARTITION BY "userId"
        ORDER BY "createdAt" DESC
      ) AS row_num
    FROM "Post" p
  )
  SELECT *
  FROM ranked_posts
  WHERE row_num = 1;
`;
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });