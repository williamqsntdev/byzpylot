import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getDashboardCourses } from "@/actions/courses/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import DifficultyBar from "@/components/difficulty-bar";
import { MissionCard } from "./_components/mission-card";

export default async function MissionPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const { completedCourses, coursesInProgress } = await getDashboardCourses(
    userId
  );

  const missions = [
    {
      title: 'Mission 1',
      description: 'Effectuer une analyse approfondie des besoins du client.',
    },
    {
      title: 'Mission 2',
      description: 'Développer et implémenter une solution personnalisée.',
    },
    {
      title: 'Mission 3',
      description: 'Tester la solution et fournir des rapports détaillés.',
    },
  ];
  

  return (
    <div className="p-6 space-y-4">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Mes Missions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <MissionCard />
      </div>
      </div>
    </div>
  );
}
