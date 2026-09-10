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

    const item = await tx.orderItem.create({
      data: {
        orderId: order.id,
        productId: 10,
        quantity: 2,
      },
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


