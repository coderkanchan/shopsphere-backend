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

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });