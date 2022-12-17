import React from "react";

const Headers = [
  {
    id: 0,
    title: "Position",
  },
  {
    id: 1,
    title: "Club",
  },
  {
    id: 2,
    title: "Played",
  },
  {
    id: 3,
    title: "Won",
  },
  {
    id: 4,
    title: "Drawn",
  },
  {
    id: 5,
    title: "Lost",
  },
  {
    id: 6,
    title: "GF",
  },
  {
    id: 7,
    title: "GA",
  },
  {
    id: 8,
    title: "GD",
  },
  {
    id: 9,
    title: "Points",
  },
  {
    id: 10,
    title: "Form",
  },
];

const TableHead = () => {
  return (
    <thead>
      <tr>
        {Headers.map((el) => (
          <th key={el.id}>{el.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
