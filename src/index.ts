import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const newUser = await prisma.user.create({
    data: {
      name: "Kanchan",
      email: "kanchan@gmail.com",
      age: 22
    }
  });

  console.log(newUser);

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });