import React from "react";
import TrackerBook from "./TrackerBook";

const TrackerList = ({ levelData }) => {
  const weeks = Object.keys(levelData);

  return (
    <div>
      {weeks.map((week) => (
        <div key={week}>
          <h2 className="my-3">{week}</h2>
          {Object.keys(levelData[week].books).map((book, index) => (
            <TrackerBook
              bookData={levelData[week].books[book]}
              bookTitle={book}
              key={book}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TrackerList;
