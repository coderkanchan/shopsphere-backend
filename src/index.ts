import "dotenv/config";
import prisma from "./config/prisma";

async function main() {

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: {
        id: 1,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = await tx.user.update({
      where: {
        id: 1,
      },
      data: {
        age: 25,
      },
    });

    return updatedUser;
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });