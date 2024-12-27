"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";

export async function createMachine(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }

  const newMachine = await prisma.machine.create({
    data: {
      name: formData.get("name") as string,
      num: formData.get("num") as string,
      category: formData.get("category") as string,
      tito: formData.get("tito") === "on",
      cashIn: formData.get("cashIn") === "on",
      cashOut: formData.get("cashOut") === "on",
      ticketIn: formData.get("ticketIn") === "on",
      ticketOut: formData.get("ticketOut") === "on",
      refill: formData.get("refill") === "on",
      handPay: formData.get("handPay") === "on",
    },
  });
  console.log(newMachine);
}
