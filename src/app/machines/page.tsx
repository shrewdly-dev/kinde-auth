import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import AddMachine from "./components.js/addMachine";
import prisma from "@/lib/prisma";

const Machines = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }
  const machines = await prisma.machine.findMany();
  return (
    <div>
      <div className="">
        {machines.map((machine) => (
          <div key={machine.id} className="flex space-around gap-10">
            <h2>{machine.name}</h2>
            <p>{machine.num}</p>
            <p>{machine.category}</p>
            <p>{machine.tito && <p>Tito </p>}</p>
            <p>{machine.cashIn && <p>Cash in </p>}</p>
            <p>{machine.cashOut && <p>Cash out</p>}</p>
            <p>{machine.ticketIn}</p>
            <p>{machine.ticketOut}</p>
            <p>{machine.refill}</p>
            <p>{machine.handPay}</p>
          </div>
        ))}
      </div>
      <AddMachine />
    </div>
  );
};

export default Machines;
