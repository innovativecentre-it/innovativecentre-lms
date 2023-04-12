import React from "react";
import { Tabs } from "flowbite-react";
import TrackerList from "./TrackerList";
import trackerbase from "../database/dictionary";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="my-5">Dashboard</h1>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        {Object.keys(trackerbase).map((level, index) => (
          <Tabs.Item title={`Level ${index + 1}`} key={level}>
            <TrackerList levelData={trackerbase[level]} />
          </Tabs.Item>
        ))}
      </Tabs.Group>
    </div>
  );
};

export default Dashboard;
