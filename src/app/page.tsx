import {
  CogIcon,
  ServerIcon,
  UsersIcon,
  NewspaperIcon,
  PencilSquareIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    name: "Gambling Commission",
    description:
      "Easily comply with Gambling Commission regulations and statutory returns",
    icon: NewspaperIcon,
  },
  {
    name: "Staff Management",
    description: "Staff training, rotas and contracts",
    icon: UsersIcon,
  },
  {
    name: "Machines",
    description:
      "Empties and meter readings, machine faults and repairs, machine locations",
    icon: PencilSquareIcon,
  },
  {
    name: "Tito Ticket Tracking",
    description: "Track tito tickets from machines and cash desks",
    icon: TicketIcon,
  },
  {
    name: "Powerful Reporting",
    description:
      "Monitor arcade and machine level performance with powerful reporting",
    icon: CogIcon,
  },
  {
    name: "Data Securely Backed Up",
    description:
      "Access controls and data backups to keep your data safe and secure",
    icon: ServerIcon,
  },
];

const LandingPage = () => {
  return (
    <div>
      <div className=" bg-white ">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-semibold text-cyan-600">
            Arcade Manager
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-cyan-700 sm:text-4xl">
            Manage arcades with ease.
          </p>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 p-3 shadow-lg">
                          <feature.icon
                            aria-hidden="true"
                            className="size-6 text-white"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mb-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-teal-700 sm:text-3xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
              Free 60 day trial. No credit card required. Cancel anytime.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/authflow/register"
                className="rounded-md bg-teal-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
