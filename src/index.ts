import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const page = 3;
  const limit = 10;

  const user = await prisma.user.findMany({
    where: {
      AND: [
        { age: { gte: 18 } },
        {
          OR: [
            { name: { contains: "a" } },
            { name: { contains: "e" } }
          ]
        }
      ]
    }
  });

  console.log(user);

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });