import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <Header />
      <main>
        <div className="w-2 h-2 bg-red-500"></div>
      </main>
      <Footer />
    </div>
  );
}
