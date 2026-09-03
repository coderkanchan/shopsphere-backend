import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  }); 