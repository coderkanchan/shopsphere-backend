import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "priya@gmail.com",
    },

    update: {
      age: 23,
    },

    create: {
      name: "Priya",
      email: "priya@gmail.com",
      age: 23,
    },
  });
  console.log(user);
}
main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });