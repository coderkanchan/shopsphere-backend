import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const user = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    select: {
      name: true,
      posts: {
        select: {
          title: true,
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