"use client";

import { useFormStatus } from "react-dom";
import { createMachine } from "../_actions";

import Link from "next/link";

function Submit() {
  const status = useFormStatus();
  if (status.pending) {
    return (
      <button
        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        disabled={status.pending}
      >
        Adding machine ...
      </button>
    );
  }

  return (
    <button
      className=" rounded-md bg-indigo-600
     px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Add machine
    </button>
  );
}

const AddMachine = () => {
  return (
    <div className="border-b border-gray-900/10  max-w-[800px] mx-auto text-slate-200">
      <h2>Create Machine</h2>

      <form action={createMachine} className="flex flex-col gap-y-1">
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 "
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="num"
              className="block text-sm font-medium leading-6 "
            >
              Number
            </label>
            <div className="mt-2">
              <input
                id="num"
                name="num"
                type="number"
                placeholder="Number"
                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="tito"
              className="ml-4 block text-sm font-medium leading-6 "
            >
              Tito
            </label>
            <div className="mt-2 ml-4 ">
              <input
                className="w-8 h-8 m-[1px] border-1 font-extralight"
                type="checkbox"
                name="tito"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 "
            >
              Category
              <Link
                href="https://www.gamblingcommission.gov.uk/licensees-and-businesses/guide/gaming-machine-categories"
                passHref
                legacyBehavior
              >
                <a target="_blank">
                  <p className=" mt-2 text-xs text-slate-400">
                    Click for description, opens new tab.
                  </p>
                </a>
              </Link>
            </label>
            <div className="mt-2 text-slate-800">
              <select
                className="text-sm"
                defaultValue="C"
                name="category"
                id="category"
                required
              >
                <option className="text-sm" value="B1">
                  B1
                </option>
                <option className="text-sm" value="B2">
                  B2
                </option>
                <option className="text-sm" value="B3">
                  B3
                </option>
                <option className="text-sm" value="B3A">
                  B3A
                </option>
                <option className="text-sm" value="B4">
                  B4
                </option>
                <option className="text-sm" value="C">
                  C
                </option>
                <option className="text-sm" value="D">
                  D
                </option>
              </select>
            </div>
          </div>
        </div>

        <h3 className="mt-4">Meter reading settings</h3>
        <div className="mt-2 grid grid-cols-6 gap-x-4 gap-y-4 sm:grid-cols-6">
          <div className="sm:col-span-1">
            <label
              htmlFor="cashIn"
              className=" block text-sm font-medium leading-6 "
            >
              Cash In
            </label>
            <div className="mt-2  ">
              <input
                className="w-8 h-8 m-[1px] border-1 font-extralight"
                type="checkbox"
                name="cashIn"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="cashOut"
              className=" block text-sm font-medium leading-6 "
            >
              Cash Out
            </label>
            <div className="mt-2  ">
              <input
                className="w-8 h-8 m-[1px] border-1 font-extralight"
                type="checkbox"
                name="cashOut"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="ticketIn"
              className=" block text-sm font-medium leading-6 "
            >
              Ticket In
            </label>
            <div className="mt-2  ">
              <input
                className="w-8 h-8 m-[1px] border-1 font-extralight"
                type="checkbox"
                name="ticketIn"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="ticketOut"
              className=" block text-sm font-medium leading-6 "
            >
              Ticket In
            </label>
            <div className="mt-2  ">
              <input
                className="w-8 h-8 m-[1px] border-1 font-extralight"
                type="checkbox"
                name="ticketOut"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="refill"
              className=" block text-sm font-medium leading-6 "
            >
              Refills
            </label>
            <div className="mt-2  ">
              <input
                className="w-8 h-8 m-[1px] border-1 font-extralight"
                type="checkbox"
                name="refill"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="handPay"
              className=" block text-sm font-medium leading-6 "
            >
              Hand Pay
            </label>
            <div className="mt-2  ">
              <input
                className="w-8 h-8 m-[1px] border-1 font-extralight"
                type="checkbox"
                name="handPay"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-stat gap-4 mt-6 mb-4">
          <Submit />
          <Link
            href="/admin/machines"
            className="block rounded-md bg-yellow-600 px-3 py-2 text-center
         text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 
         focus-visible:outline focus-visible:outline-2 
         focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddMachine;
