import "dotenv/config";
import prisma from "./config/prisma";

async function main() {
  const result = await prisma.$transaction(async (tx) => {
    const order = await tx.order.create({
      data: {
        userId: 1,
        status: "PENDING",
      },
    });

    const item = await prisma.user.create({
      data: {
        name: "Kanchan",
        email: "kanchan@example.com",
        posts: {
          create: [
            { title: "First Post" },
            { title: "Second Post" }
          ]
        }
      }
    });
    await tx.product.update({
      where: {
        id: 10,
      },
      data: {
        stock: {
          decrement: 2,
        },
      },
    });

    return order;
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });


