import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  const users = await prisma.user.findMany({
    where: {
      name: {
        startsWith: "A"
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