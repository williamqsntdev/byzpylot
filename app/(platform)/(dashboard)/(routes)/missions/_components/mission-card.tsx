import DifficultyBar from "@/components/difficulty-bar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import { Card } from "@tremor/react";

const MissionCard = async () => {
  const prisma = new PrismaClient();

  const missions = await prisma.mission.findMany({
    where: {
      categoryId: 1,
    },
    orderBy: {
      order: "asc",
    },
  });

  return (
    <div className="mx-auto p-4 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-4">Missions</h1>
      <div className="flex flex-no-wrap">
        {missions.map((mission) => (
          <Card
            key={mission.id}
            className="bg-gray-700 mr-4 mb-4"
            style={{ maxWidth: "300px", flex: "0 0 auto" }}
          >
            <CardHeader className="bg-sky-500">
              <CardTitle>{mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">{mission.description}</p>
              <DifficultyBar level={mission.difficulty} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MissionCard;
