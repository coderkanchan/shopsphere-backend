import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  const result = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  const users = await prisma.user.findMany({
    where: {
      posts: {
        some: {},
      },
    },
  });

  const users = await prisma.user.findMany({
    where: {
      posts: {
        some: {
          title: {
            contains: "Prisma",
            mode: "insensitive",
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