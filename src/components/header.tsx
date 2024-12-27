import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

<LogoutLink>Log out</LogoutLink>;

import Navbar from "./navbar";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
  console.log("User", user);

  return (
    <div className="flex min-h-full flex-col mb-6">
      <header className="shrink-0 border-b border-gray-200 bg-white ">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2l font-semibold">
            Shrewdly
          </Link>
          <Navbar />
          <div className="flex items-center gap-x-8">
            {!isUserAuthenticated && (
              <div className=" flex gap-6">
                <LoginLink className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                  Sign in
                </LoginLink>

                <RegisterLink className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                  Sign Up
                </RegisterLink>
              </div>
            )}
            {isUserAuthenticated && (
              <div className="flex gap -4">
                <div className="w-7 h-7 bg-teal-700 rounded-full mr-4  text-white text-center flex items-center justify-center">
                  {user?.given_name?.[0]}
                </div>
                <LogoutLink>Log out</LogoutLink>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
