import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const user = await prisma.user.findUnique({
    where: {
      email: "abc@gmail.com"
    }
  });

  console.log(user);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });