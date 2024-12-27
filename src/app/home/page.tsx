import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8 text-teal-700">
      <main className="flex-1  ">
        <div className="flex-1 border-2 border-slate-200 rounded-sm  mb-4">
          <div className="flex justify-between border-b-2 border-slate-200 py-4 px-3">
            <h2 className="font-semibold text-sm ">Current Floats</h2>
            <EllipsisVerticalIcon className="h-6 w-6 text-teal-700" />
          </div>
          <div className="flex justify-between py-4 px-3 text-xs">
            <h2 className="">Opening Float</h2>
            <p>£10000</p>
          </div>
        </div>
        <div className="flex-1 border-2 border-slate-200 rounded-sm  mb-4">
          <div className="flex justify-between border-b-2 border-slate-200 py-4 px-3">
            <h2 className="font-semibold text-sm ">Tito Tickets</h2>
            <EllipsisVerticalIcon className="h-6 w-6 text-teal-700" />
          </div>
          <div className="flex justify-between py-4 px-3 text-xs">
            <h2 className="">Previous shifts tito</h2>
            <p>£10000</p>
          </div>
        </div>
      </main>
      <main className="flex-1  ">
        <div className="flex-1 border-2 border-slate-200 rounded-sm  mb-4">
          <div className="flex justify-between border-b-2 border-slate-200 py-4 px-3">
            <h2 className="font-semibold text-sm ">Purchases receipts</h2>
            <EllipsisVerticalIcon className="h-6 w-6 text-teal-700" />
          </div>
          <div className="flex justify-between py-4 px-3 text-xs">
            <h2 className="">Opening Float</h2>
            <p>£10000</p>
          </div>
        </div>
        <div className="flex-1 border-2 border-slate-200 rounded-sm  mb-4">
          <div className="flex justify-between border-b-2 border-slate-200 py-4 px-3">
            <h2 className="font-semibold text-sm ">Machine payouts</h2>
            <EllipsisVerticalIcon className="h-6 w-6 text-teal-700" />
          </div>
          <div className="flex justify-between py-4 px-3 text-xs">
            <h2 className="">Previous shifts tito</h2>
            <p>£10000</p>
          </div>
        </div>
      </main>
    </div>
  );
}
