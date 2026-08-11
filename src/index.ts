import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  const user = await prisma.user.createMany({
    data: [
      {
        name: "Aarav",
        email: "aarav@gmail.com",
        age: 24,
      },
      {
        name: "Neha",
        email: "neha@gmail.com",
        age: 26,
      },
      {
        name: "Ishita",
        email: "ishita@gmail.com",
        age: 23,
      },
    ],
  });

  console.log(user);
}
main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });