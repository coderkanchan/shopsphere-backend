import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  try {
    await prisma.user.create({
      data: {
        name: "Another User",
        email: "ananya@gmail.com",
        age: 25,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code);
    }
  }
  const ages = await prisma.user.findMany({
    distinct: ["age"],
    select: {
      age: true,
    },
  });

  const users = await prisma.user.findMany({
    where: {
      name: {
        startsWith: "A",
      },
    },
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });