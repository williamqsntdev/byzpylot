import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getDashboardCourses } from "@/actions/courses/get-dashboard-courses";

import PlaygroundPage from "./_components/info-stats";
import DifficultyBar from "@/components/difficulty-bar";
import CircleStatus from "./_components/circle-stats";

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
      <PlaygroundPage />
      <CircleStatus />
      <DifficultyBar level="hard" />
    </div>
  );
}
