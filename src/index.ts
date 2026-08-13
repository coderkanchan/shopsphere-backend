import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  try {
    const user = await prisma.user.create({
      data: {
        name: "Ananya",
        email: "ananya@gmail.com",
        age: 24,
      },
    });

    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });