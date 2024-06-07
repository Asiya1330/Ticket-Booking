import React, { useEffect, useState } from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { IoTicketSharp } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import { useNavigate,useLocation } from "react-router-dom";

const AdminLeftNavBar = () => {
  const [hover, setHover] = useState();
  const location = useLocation();
  const liStyle =
    "flex  text-neutral-500 hover:text-sky-500 cursor-pointer hover:bg-sky-200 gap-3 pl-3 pr-12 py-3 rounded-md";
  const liClickedStyle =
    "flex  text-sky-500 cursor-pointer bg-sky-200 gap-3 pl-3 pr-12 py-3 rounded-md";

  const navigate = useNavigate();
  return (
    <div className="pl-5 py-5 flex flex-col gap-5 h-full">
      <h1 className="text-base font-semibold">Menu</h1>
      <div>
        <ul className="flex flex-col gap-2">
          <li
            className={location.pathname === "/dashboard" ? liClickedStyle : liStyle}
            onMouseOver={() => setHover("Dashboard")}
            onMouseLeave={() => setHover(null)}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            {" "}
            <RiDashboardHorizontalFill
              size={25}
              className={`${
                hover === "Dashboard" || location.pathname === "/dashboard"
                  ? "bg-white"
                  : ""
              } rounded-md p-1`}
            />
            Dashboard
          </li>
          <li
            className={location.pathname === "/users" ? liClickedStyle :liStyle}
            onMouseOver={() => setHover("Users")}
            onMouseLeave={() => setHover(null)}
            onClick={() => {
              navigate("/users");
            }}
          >
            {" "}
            <HiMiniUsers
              size={25}
              className={`${
                hover === "Users" || location.pathname === "/users" ? "bg-white" : "" 
              } rounded-md p-1`}
            />
            Users
          </li>
          <li
            className={liStyle}
            onMouseOver={() => setHover("Tickets")}
            onMouseLeave={() => setHover(null)}
          >
            {" "}
            <IoTicketSharp
              size={25}
              className={`${
                hover === "Tickets" ? "bg-white" : ""
              } rounded-md p-1`}
            />
            Tickets
          </li>
          <li
            className={liStyle}
            onMouseOver={() => setHover("Matches")}
            onMouseLeave={() => setHover(null)}
          >
            {" "}
            <RiLiveLine
              size={25}
              className={`${
                hover === "Matches" ? "bg-white" : ""
              } rounded-md p-1`}
            />
            Matches
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminLeftNavBar;
