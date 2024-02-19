import { PrismaClient } from "@prisma/client";

// Initialisez Prisma
const prisma = new PrismaClient();

// Définissez la fonction pour récupérer le nombre de leads avec un userId spécifique
async function countLeadsByUserId(userId: string): Promise<number> {
  try {
    const count = await prisma.lead.count({
      where: {
        userId: userId
      }
    });
    return count;
  } catch (error) {
    console.error("Error counting leads:", error);
    return 0; // En cas d'erreur, retournez 0
  }
}
