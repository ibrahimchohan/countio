import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import { use, useEffect } from "react";
import Cell from "@/components/cell";

export default function Home() {
  const handClick = () => {
    console.log("click");
  };

  const createCells = () => {
    let cells: JSX.Element[][] = [];
    for (let i = 0; i < 30; i++) {
      cells.push([]);
      cells[i].push(<Cell />);
    }
    return cells;
  };

  return (
    <div>
      {/* <Header /> */}
      <h1 className="text-center mt-6">Count.io</h1>
      <div className="my-20 mx-auto gap-y-1 gap-x-1 max-w-fit p-1 border border-gray-600 rounded-lg grid grid-flow-cols grid-cols-7">
        {createCells()}
      </div>
      <Footer />
    </div>
  );
}
