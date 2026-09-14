import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
await prisma.$transaction(async (tx) => {
  // order create
  // order items create
  // stock update
});
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });


