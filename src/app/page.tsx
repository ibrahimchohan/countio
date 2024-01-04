import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import { use, useEffect } from "react";
import Cell from "@/components/cell";
import React from "react";
import Matrix from "@/components/matrix";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <h1 className="text-center mt-6">Count.io</h1>
      <Matrix />
      <Footer />
    </div>
  );
}
