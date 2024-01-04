"use client";

import React from "react";
import Cell from "./cell";
import { start } from "repl";

const Matrix = () => {
  const [month, setMonth] = React.useState(0);
  const [showAll, setShowAll] = React.useState(false);

  const decreaseMonth = () => {
    month != 0 && setMonth(month - 1);
  };

  const increaseMonth = () => {
    month != 11 && setMonth(month + 1);
  };

  const createCells = () => {
    let cells: JSX.Element[] = [];
    for (let i = 0; i < 365; i++) {
      cells.push(<Cell />);
    }
    return cells;
  };

  const filterMonths = (matrix: JSX.Element[], first: number, last: number) => {
    const selection = matrix.filter((value: JSX.Element, index: number) => {
      return index >= first && index <= last;
    });
    return selection;
  };

  const findStartAndEnd = (month: number) => {
    switch (month) {
      case 0:
        return [0, 30];
      case 1:
        return [31, 58];
      case 2:
        return [59, 89];
      case 3:
        return [90, 119];
      case 4:
        return [120, 150];
      case 5:
        return [151, 180];
      case 6:
        return [181, 211];
      case 7:
        return [212, 242];
      case 8:
        return [243, 272];
      case 9:
        return [273, 303];
      case 10:
        return [304, 333];
      case 11:
        return [334, 364];
    }
    return [0, 30];
  };

  const cellMatrix = () => {
    const matrix = createCells();
    const startAndEnd = findStartAndEnd(month);
    const selection = filterMonths(matrix, startAndEnd[0], startAndEnd[1]);
    console.log("Start and end");
    console.log(startAndEnd);
    return selection;
  };

  return (
    <div className="my-20 mx-auto max-w-fit  border border-gray-600 rounded-lg">
      <div className="border border-white space-x-3 px-3 m-2 rounded-xl max-w-fit ml-auto">
        <button
          className="text-small hover:text-gray-500"
          onClick={decreaseMonth}
        >
          <p>&lt;</p>
        </button>
        <button
          className="text-small hover:text-gray-500"
          onClick={increaseMonth}
        >
          <p>&gt;</p>
        </button>
      </div>
      <div className="mx-auto gap-y-1 gap-x-1  p-1  grid grid-flow-cols grid-cols-7">
        {cellMatrix()}
      </div>
    </div>
  );
};

export default Matrix;
