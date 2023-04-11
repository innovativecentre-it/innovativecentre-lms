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
      book: "Reading collections",
<<<<<<< HEAD
      unit: "Unit 2",
      approved: "no",
    },
    {
      book: "Listening collection",
      unit: "Unit 2",
=======
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Listening collections",
      unit: "Unit 1 ",
>>>>>>> 38c2e6ede8ed12620d85af66234b0438f83887b0
      approved: "no",
    },
  ];
  const level2 = [
    {
      book: "Complete IELTS 4-5 SB",
      unit: "Unit 1",
      approved: "yes",
    },
<<<<<<< HEAD
=======
    {
      book: "Graduation IELTS",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Advantage Reading skills",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Advantage Listening skills",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Advanced Vocabulary for IELTS",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Objective Proficiency",
      unit: "Unit 1",
      approved: "no",
    },
>>>>>>> 38c2e6ede8ed12620d85af66234b0438f83887b0
  ];
  const level3 = [
    {
      book: "Complete IELTS 4-5 SB",
      unit: "Unit 1",
      approved: "no",
<<<<<<< HEAD
=======
    },
    {
      book: "Graduation skills for IELTS",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Official Guide to IELTS",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "New insight into IELTS",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Ready for IELTS",
      unit: "Unit 1",
      approved: "no",
    },
    {
      book: "Mindset for IELTS L1-L3",
      unit: "Unit 1",
      approved: "no",
>>>>>>> 38c2e6ede8ed12620d85af66234b0438f83887b0
    },
  ];

  const level4 = [
    {
      book: "Complete IELTS 4-5 SB",
      unit: "Unit 1",
      approved: "yes",
    },
<<<<<<< HEAD
=======
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
>>>>>>> 38c2e6ede8ed12620d85af66234b0438f83887b0
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
