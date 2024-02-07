"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Bell, LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";
import { useState } from "react";
import { Notifications } from "@/app/(platform)/(dashboard)/_components/notifications";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  const isDashboardPage = pathname === "/dashboard";

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      {isDashboardPage && (
        <div>
          Dashboard
        </div>
      )}
      <div className="flex gap-x-2 ml-auto items-center">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <Button size="sm" variant="outline" className="mr-2">
              <LogOut className="h-4 w-4 mr-2" />
              User mode
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="outline" className="mx-2">
              Teacher mode
            </Button>
          </Link>
        ) : null}
        <Bell className="cursor-pointer mr-2" onClick={togglePopup} />{" "}
        <UserButton afterSignOutUrl="/" />
      </div>
      {showPopup && (
        <div className="absolute z-50 bg-white shadow-md p-4 rounded-md top-full right-0">
          <Notifications />
        </div>
      )}
    </>
  );
};
