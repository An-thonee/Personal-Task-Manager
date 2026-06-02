import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import girl from "../assets/girl img.jpg";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  });

  const allLinks = () => {
    return location.pathname === "/" ? (
      <>
        <NavLink to="/newtask">
          <p className="font-medium text-[22px] text-[#292929]">New Task</p>
        </NavLink>

        <NavLink to="/mytask">
          <p className="font-medium text-[22px] text-[#292929]">All Task</p>
        </NavLink>
      </>
    ) : location.pathname === "/mytask" ? (
      <NavLink to="/newtask">
        <p className="font-medium text-[22px] text-[#292929]">New Task</p>
      </NavLink>
    ) : location.pathname === "/newtask" ? (
      <NavLink to="/mytask">
        <p className="font-medium text-[22px] text-[#292929]">All Task</p>
      </NavLink>
    ) : location.pathname === "/edittask" ? (
      <NavLink to="/mytask">
        <p className="font-medium text-[22px] text-[#292929]">All Task</p>
      </NavLink>
    ) : null;
  };

  return (
    <nav className="flex justify-between  border-b-[0.5px] py-3 px-40 mx-auto w-full">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="" />
        <h3 className="text-[#2D0050] font-semibold text-[27.37px]">
          TaskDuty
        </h3>
      </Link>

      <div className="flex items-center gap-5">
        {allLinks()}
        <div className="relative">
          <img
            src={girl}
            alt=""
            className="w-15 h-15 rounded-full border-[3px] border-[#292929]"
          />
          <div className="w-2.75 h-2.75 rounded-full bg-[#974FD0]  top-0 absolute right-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
