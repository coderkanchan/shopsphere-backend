import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const user = await prisma.user.findMany({
    where: {
      posts: {
        none: {
          title: {
            contains: "Prisma",
          },
        },
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