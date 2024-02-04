import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getDashboardCourses } from "@/actions/courses/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { InfoCard } from "./_components/info-card";
import PlaygroundPage from "./_components/info-stats";
import CircleStatus from "./_components/circle-stats";
import DifficultyBar from "@/components/difficulty-bar";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const { completedCourses, coursesInProgress } = await getDashboardCourses(
    userId
  );

  return (
    <div className="p-6 space-y-4">
      <CircleStatus />
      <PlaygroundPage />
      <DifficultyBar level="hard" />
    </div>
  );
}
