import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex space-between gap-x-2">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Other Projects</h2>
      </div>
    </header>
  );
};

export default Header;
