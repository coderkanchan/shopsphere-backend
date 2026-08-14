import "dotenv/config";
import prisma from "./config/prisma";

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
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });