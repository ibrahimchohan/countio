import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-red-500 py-3 h-12 items-center align-middle">
        <div className="flex text-center justify-between max-w-2xl mx-auto">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Other Projects</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
