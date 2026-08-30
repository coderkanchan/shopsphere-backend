import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
 CREATE TABLE "Post" (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  "userId" INT,
  FOREIGN KEY ("userId")
    REFERENCES "User"(id)
);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  }); 