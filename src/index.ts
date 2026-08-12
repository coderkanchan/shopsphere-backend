import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const posts = await prisma.post.findMany({
    where: {
      user: {
        age: {
          gt: 25,
        },
      },
    },
  });

  console.log(posts);

  const results = await prisma.user.count();

  const result = await prisma.user.count({
    where: {
      age: {
        gte: 18,
      },
    },
  });

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });