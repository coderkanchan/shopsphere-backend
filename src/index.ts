import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "Prisma Rocks",
      
      user: {
        connect: {
          id: 999,
        },
      },
    },
  });
  
  console.log(post);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });