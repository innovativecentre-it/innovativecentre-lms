import React from "react";
import { Tabs } from "flowbite-react";
import TrackerList from "./TrackerList";

const Dashboard = () => {
  const level1 = [
    {
      book: "Complete IELTS 4-5 SB",
      unit: "Unit 1",
      approved: "Yes",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="my-5">Dashboard</h1>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        <Tabs.Item title="Level 1">
          <TrackerList />
        </Tabs.Item>
        <Tabs.Item title="Level 2">
          <TrackerList />
        </Tabs.Item>
        <Tabs.Item title="Level 3">
          <TrackerList />
        </Tabs.Item>
        <Tabs.Item title="Level 4">
          <TrackerList />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default Dashboard;
