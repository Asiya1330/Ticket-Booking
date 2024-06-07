import React from "react";
import AdminLayout from "../layout/AdminLayout";
import DashboardCards from "../components/DashboardCards";
const DashboardPage = () => {
  return (
    <AdminLayout>
      <div className="flex gap-3 w-[100vh] py-5 justify-evenly">
        <DashboardCards
          info={"Members Online"}
          infoHeader={"900"}
          infoDetails={"10%"}
        />
        <DashboardCards
          info={"Today's Revenue"}
          infoHeader={"$854.08"}
          infoDetails={"10%"}
        />
        <DashboardCards
          info={"Serverload"}
          infoHeader={"923"}
          infoDetails={"113.3%"}
        />
        <DashboardCards
        header={"Total Sales by Unit"}
        headerDetails={"$473.85"}
          info={"Serverload"}
          infoHeader={"923"}
          infoDetails={"113.3%"}
        />
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
