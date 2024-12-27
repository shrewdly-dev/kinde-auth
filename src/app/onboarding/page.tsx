"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const OnBoarding = () => {
  const { isAuthenticated, getUser, isLoading } = useKindeBrowserClient();
  const currentUser = getUser();
  console.log(isAuthenticated);
  console.log("Current User", currentUser);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-700"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full">OnBoarding</div>
  );
};

export default OnBoarding;
