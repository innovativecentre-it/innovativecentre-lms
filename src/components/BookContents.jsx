import React from "react";
import { Dropdown } from "flowbite-react";

const BookContents = (unitList) => {
  return (
    <div>
      <Dropdown label="Units" inline={true}>
        {unitList.map((unit) => (
          <Dropdown.Item>{unit}</Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default BookContents;
