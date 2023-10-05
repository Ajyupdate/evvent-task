"use client";
import { Card, Flex } from "@chakra-ui/react";
import { useState } from "react";
import StatisticsCardComponents from "./components/StatisticsCardsSection";
import AreaChart from "./components/StockChart";
import TableStatSection from "./components/TableStatSection";
const statDetails = [
  {
    title: "Active Service",
    numOfServiceOrIncome: "24",
    statPercent: "+60",

    LastMonthValue: "15",
  },
  {
    title: "Total Active Booking",
    numOfServiceOrIncome: "10",
    statPercent: "-33",

    LastMonthValue: "15",
  },
  {
    title: "Total Income",
    numOfServiceOrIncome: "50K",
    statPercent: "+50",

    LastMonthValue: "25.000",
  },
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <Flex justifyContent={"flex-start"}>
        <Card flexDirection={"row"} variant={"outline"} p={1}>
          <button
            onClick={() => handleTabClick("tab1")}
            className={`px-4 py-1 font-medium rounded ${
              activeTab === "tab1" ? "bg-pink-200 text-pink-500" : ""
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => handleTabClick("tab2")}
            className={`px-4 py-1  font-medium rounded ${
              activeTab === "tab2" ? "bg-pink-200 text-pink-500" : ""
            }`}
          >
            Transaction List
          </button>
        </Card>
      </Flex>

      {activeTab === "tab1" && (
        <div>
          <StatisticsCardComponents statDetails={statDetails} />
          <TableStatSection />
          <AreaChart />
        </div>
      )}

      {activeTab === "tab2" && (
        <div>
          <p>Content for Transaction List.</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
