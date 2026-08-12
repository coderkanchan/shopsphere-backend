import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const user = await prisma.user.findMany({
    orderBy: {
      age: "asc",
    },
    take: 3,
  });

  console.log(user);

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });