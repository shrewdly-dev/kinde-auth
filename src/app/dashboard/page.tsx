import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  const permission = await getPermission("view:dashboard");
  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/api/auth/login");
  }

  if (!permission?.isGranted) {
    return (
      <div>
        <p>
          You do not have permission to view this page. Please contact the
          administrator
        </p>
      </div>
    );
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
