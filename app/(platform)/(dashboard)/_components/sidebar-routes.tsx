"use client";

import { AlignHorizontalDistributeCenter, BarChart, Book, Compass, Layers, Layout, List, ListTodo, Target } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Layers,
    label: "Leads",
    href: "/leads"
  },
  {
    icon: Target,
    label: "Missions",
    href: "/missions"
  },
  {
    icon: ListTodo,
    label: "Tasks",
    href: "/organization/tasks"
  },
  {
    icon: Compass,
    label: "Marketplace",
    href: "/search",
  },
  {
    icon: Book,
    label: "My Courses",
    href: "/favoris"
  }
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}