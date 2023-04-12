import React from "react";

const TrackerBook = ({ bookData, bookTitle }) => {
  return (
    <div className="my-3">
      <h3 className="my-2">{bookTitle}</h3>
      <ul>
        {bookData.units.map((unit, index) => (
          <li key={`${bookTitle}_${index}`}>{unit}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrackerBook;
