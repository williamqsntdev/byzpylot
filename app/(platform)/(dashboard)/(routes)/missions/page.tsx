import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { AlignVerticalSpaceBetween, CheckCircle, Clock } from "lucide-react";

import { getDashboardCourses } from "@/actions/courses/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import DifficultyBar from "@/components/difficulty-bar";
import MissionsCard from "./_components/mission-card";

export default async function MissionPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const { completedCourses, coursesInProgress } = await getDashboardCourses(
    userId
  );


  return (
    <div className="p-6 space-y-4">
      <div className="container mx-auto py-0">
        <h1 className="text-2xl font-semibold mb-6 flex items-center">
          <AlignVerticalSpaceBetween className="mr-2" />
          My missions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <MissionsCard />
      </div>
      </div>
    </div>
  );
}
