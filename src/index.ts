import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
 
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  }); 