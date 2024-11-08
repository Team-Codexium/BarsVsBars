import React from "react";
import { BellDot } from 'lucide-react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
  <div className="flex justify-between items-center pt-5 px-4">
    <Link to="/dashboard" className="text-2xl font-bold">BarsVsBars</Link>
    <div className="flex space-x-7 items-center justify-center">
        <div className="init">
            <BellDot className="h-8 text-white cursor-pointer w-8" />
        </div>
        <Link to={`/profile`} className="pfp flex space-x-3 items-center justify-center">
            <h1 className="hidden md:block">Username</h1>
            <img className="h-10 w-10 rounded-full" src alt="" />
        </Link>
    </div>
  </div>
  )
}
export default Navbar;
