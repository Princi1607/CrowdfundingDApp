import React from "react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">CrowdfundICP</h1>
      <LoginButton />
    </nav>
  );
};

export default Navbar;
