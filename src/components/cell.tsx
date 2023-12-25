"use client";

import React from "react";

interface CellProps {}

const Cell: React.FC<CellProps> = ({}) => {
  const [clicked, setClicked] = React.useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={
        clicked
          ? "w-4 h-4 bg-green-600 border border-gray-400"
          : "w-4 h-4 bg-gray-600 border border-gray-400"
      }
      onClick={onClick}
    />
  );
};

export default Cell;
