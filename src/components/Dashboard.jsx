import React from "react";
import { Tabs } from "flowbite-react";
import TrackerList from "./TrackerList";

const Dashboard = () => {
  const level1 = [
    {
      book: "Complete IELTS 4-5 SB",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Complete IELTS 4-5 WB",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Complete IELTS 4-5 SB",
      unit: "Unit 2",
      approved: "no",
    },
    {
      book: "Complete IELTS 4-5 WB",
      unit: "Unit 2",
      approved: "no",
    },
  ];
  const level2 = [
    {
      book: "Complete IELTS 4-5 SB",
      unit: "Unit 1",
      approved: "yes",
    },
  ];
  const level3 = [
    {
      book: "Complete IELTS 4-5 SB",
      unit: "Unit 1",
      approved: "no",
    },
  ];
  
  const level4 = [
    {
      book: "Cambridge 11-14",
      unit: "Unit 1",
      approved: "yes",
    },
    {
      book: "Cambridge Trainer 1-2",
      unit: "Unit 1",
      approved: "yes",
    },
    {
      book: "Offical Guide to IELTS",
      unit: "Unit 1",
      approved: "yes",
    },
    {
      book: "Cambridge English Testbank",
      unit: "Unit 1",
      approved: "yes",
    },
    {
      book: "Longman practice 1-3",
      unit: "Unit 1",
      approved: "yes",
    },
    {
      book: "Exam essentails 1-2",
      unit: "Unit 1",
      approved: "yes",
    },
  
  ];

  return (
    <div className="container mx-auto">
      <h1 className="my-5">Dashboard</h1>
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        <Tabs.Item title="Level 1">
          <TrackerList levelData={level1} />
        </Tabs.Item>
        <Tabs.Item title="Level 2">
          <TrackerList levelData={level2} />
        </Tabs.Item>
        <Tabs.Item title="Level 3">
          <TrackerList levelData={level3} />
        </Tabs.Item>
        <Tabs.Item title="Level 4">
          <TrackerList levelData={level4} />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default Dashboard;
