import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 25,

      posts: {
        create: [
          {
            title: "My First Post",
            content: "Learning Prisma is awesome!",
          },
          {
            title: "Second Post",
            content: "Nested create is powerful.",
          },
        ],
      },
    },

    include: {
      posts: true,
    },
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });