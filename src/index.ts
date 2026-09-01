import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
 
  CREATE TABLE "User" (
  id INT PRIMARY KEY,
  age INT CHECK (age >= 18)
);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  }); 