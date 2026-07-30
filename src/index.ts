import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: "an"
      }
    }
  });

  console.log(users);

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });