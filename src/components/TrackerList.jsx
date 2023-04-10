import React from "react";
import { Checkbox, Table, Progress } from "flowbite-react";

const TrackerList = (props) => {
  return (
    <div>
      <Progress
        progress={80}
        labelProgress={true}
        textLabel="Completed"
        labelText={true}
        size="xl"
        color="green"
        className="mx-5 mb-7"
      />
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="!p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Book</Table.HeadCell>
          <Table.HeadCell>Homework</Table.HeadCell>
          <Table.HeadCell>Approved</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Complete IELTS 4-5 Student's Book
            </Table.Cell>
            <Table.Cell>Unit 1</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>
              <a
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default TrackerList;
