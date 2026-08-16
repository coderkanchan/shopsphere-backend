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
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    skip: 0,
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });