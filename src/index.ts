import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const result = await prisma.user.updateMany({
    where: {
      age: {
        gte: 25,
      },
    },
    data: {
      age: 30,
    },
  });

  console.log(result);


}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });