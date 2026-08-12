import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const result = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });