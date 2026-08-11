import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "ananya@gmail.com",
    },
    update: {
      age: 21,
    },
    create: {
      name: "Ananya",
      email: "ananya@gmail.com",
      age: 21,
    },
  });

  console.log(user);
}
main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });