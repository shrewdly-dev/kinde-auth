"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainRoutes = [
  { name: "Home", path: "/home" },
  { name: "Cashdesk", path: "/cashdesk", requiresAuth: true },
  { name: "Dashboard", path: "/dashboard", requiresAuth: false },
  { name: "Machines", path: "/machines", requiresAuth: true },
  { name: "Onboarding", path: "/onboarding", requiresAuth: true },
  { name: "Empties", path: "/api/empties", requiresAuth: true },
  { name: "Admin", path: "/admin", requiresAuth: true },
];

const Navbar = () => {
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-700"></div>
      </div>
    );
  }

  return (
    <div className="flex space-x-4 font-semibold text-sm">
      {mainRoutes.map(({ name, path, requiresAuth }) => {
        if (requiresAuth && !isAuthenticated) return null;
        const isActive = pathname.startsWith(path);
        return (
          <Link
            key={path}
            href={path}
            className={
              isActive
                ? "border-b-2 border-teal-700"
                : "border-b-2 border-transparent"
            }
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
