const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
      ],
    });

    await database.CategoryMission.createMany({
      data: [
        { id: 1, name: "E-commerce" },
        { id: 2, name: "Agency" },
        { id: 3, name: "Investment" },
        { id: 4, name: "Trading" },
        { id: 5, name: "Closing" },
      ],
    });
    await database.Mission.createMany({
      data: [
        {
          categoryId: 1,
          order: 1,
          title: "Find a product winner",
          description:
            "A product winner is the start of your e-commerce business",
          tips: "you'll have to do...",
          difficulty: 'hard'
        },
        {
          categoryId: 1,
          order: 2,
          title: "Find a product winner",
          description:
            "A product winner is the start of your e-commerce business",
          tips: "you'll have to do...",
          difficulty: 'medium'
        },
        {
          categoryId: 1,
          order: 3,
          title: "Find a product winner",
          description:
            "A product winner is the start of your e-commerce business",
          tips: "you'll have to do...",
          difficulty : 'hard'
        },
        {
          categoryId: 1,
          order: 4,
          title: "Find a product winner",
          description:
            "A product winner is the start of your e-commerce business",
          tips: "you'll have to do...",
          difficulty : 'hard'
        },
        {
          categoryId: 1,
          order: 5,
          title: "Find a product winner",
          description:
            "A product winner is the start of your e-commerce business",
          tips: "you'll have to do...",
          difficulty : 'hard'
        },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
