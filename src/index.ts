import "dotenv/config";
import prisma from "./config/prisma";
import { Prisma } from "./generated/prisma/client";

async function main() {
  try {
    await prisma.user.create({
      data: {
        name: "Another User",
        email: "ananya@gmail.com",
        age: 25,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code);
    }
  }
  const ages = await prisma.user.findMany({
    distinct: ["age"],
    select: {
      age: true,
    },
  });

  const result = await prisma.$queryRaw`
  SELECT *
  FROM "Color"
  CROSS JOIN "Size";
`;

  const employees = await prisma.employee.findMany({
    include: {
      manager: true,
      employees: true,
    },
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });