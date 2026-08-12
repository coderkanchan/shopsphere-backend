import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const result = await prisma.user.groupBy({
    by: ["age"],
    _count: {
      _all: true,
    },
  });

  
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });