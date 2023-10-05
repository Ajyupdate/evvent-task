import PageLayout from "@/modules/dashboard/layout/DashboardLayout";
import DashboardPage from "@/modules/dashboard/views/DashboardPage";

export default function Home() {
  return (
    <div>
      <PageLayout title={"Dashboard"}>
        <DashboardPage />
      </PageLayout>
    </div>
  );
}
