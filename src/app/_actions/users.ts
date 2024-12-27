"use server";

import prisma from "@/lib/prisma";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  clerkId: string;
  role: string;
}

export const createAdminUser = async (user: User) => {
  try {
    const newUser = await prisma.user.create({ data: user });
    return newUser;
  } catch (error) {
    console.log("error", error);
  }
};
