import React from "react";
import { Table, Checkbox, Dropdown } from "flowbite-react";
import BookContents from "./BookContents";

const TrackerBook = ({ bookData, bookTitle }) => {
  return (
    <div className="">
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="!p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Book</Table.HeadCell>
          <Table.HeadCell>Contents</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {bookData.units.map((book) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {bookTitle}
              </Table.Cell>
              <Table.Cell>
                <Dropdown label="Units" inline={true}>
                  {bookData.units.map((unit, index) => (
                    <Dropdown.Item>{unit}</Dropdown.Item>
                  ))}
                </Dropdown>
              </Table.Cell>
              <Table.Cell>
                <a
                  href="/tables"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TrackerBook;
