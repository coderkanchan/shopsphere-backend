import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  // const result = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Aarav",
  //       email: "aarav@gmail.com",
  //       age: 24,
  //     },
  //     {
  //       name: "Neha",
  //       email: "neha@gmail.com",
  //       age: 26,
  //     },
  //     {
  //       name: "Ishita",
  //       email: "ishita@gmail.com",
  //       age: 23,
  //     },
  //   ],
  // });

  const result = await prisma.user.updateMany({
    where: {
      age: {
        gte: 25,
      },
    },
    data: {
      age: 30,
    },
  });

  console.log(result);


}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });