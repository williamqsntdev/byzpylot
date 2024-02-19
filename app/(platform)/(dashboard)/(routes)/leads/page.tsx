import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";

import { getDashboardCourses } from "@/actions/courses/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";
import { InfoCard } from "../dashboard/_components/info-card";
import Tables from "./_components/tables";
import CardKPI from "./_components/card";


export default async function LeadsPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4">
      <div>
      <CardKPI />
      </div>
      <Tables />
    </div>
  )
}
