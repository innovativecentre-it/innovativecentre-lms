import React from "react";
import TrackerBook from "./TrackerBook";
import { Accordion, Checkbox, Table, Dropdown } from "flowbite-react";

const TrackerList = ({ levelData }) => {
  const weeks = Object.keys(levelData);

  return (
    <div>
      <Accordion>
        {weeks.map((week) => (
          <Accordion.Panel key={week}>
            <Accordion.Title>{week}</Accordion.Title>
            <Accordion.Content>
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
                  {Object.keys(levelData[week].books).map((book, index) => (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="!p-4">
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {book}
                      </Table.Cell>
                      <Table.Cell>
                        <Dropdown label="Units" inline={true}>
                          {levelData[week].books[book].units.map(
                            (unit, index) => (
                              <Dropdown.Item>{unit}</Dropdown.Item>
                            )
                          )}
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
              {/* {Object.keys(levelData[week].books).map((book, index) => (
                <TrackerBook
                  bookData={levelData[week].books[book]}
                  bookTitle={book}
                  key={book}
                />
              ))} */}
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default TrackerList;
