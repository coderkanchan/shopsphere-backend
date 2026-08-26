import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
 const users = await prisma.user.findMany({
  where: {
    posts: {
      some: {
        title: {
          contains: "Prisma",
        },
      },
    },
  },
});
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });