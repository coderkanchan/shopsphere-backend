import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const result = await prisma.$transaction([
    prisma.user.create({
      data: {
        name: "Ananya",
        email: "ananya@gmail.com",
        age: 24,
      },
    }),

    prisma.user.create({
      data: {
        name: "Kavya",
        email: "kavya@gmail.com",
        age: 26,
      },
    }),
  ]);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });