import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Aman",
      email: "aman@gmail.com",

      posts: {
        create: [
          {
            title: "Post 1",
          },
          {
            title: "Post 2",
          },
          {
            title: "Post 3",
          },
        ],
      },
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });