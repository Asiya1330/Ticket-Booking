import React, { useState } from "react";
import logo from "../assets/images/fcbLogo.png";
import DropdownLeagueCup from "./DropdownLeagueCup";
import DropdownCup from "./DropdownCup";
import {useNavigate} from 'react-router-dom';

const HeroSection = ({ children, background = "bg-hero-navbar" }) => {
  const [leagueNav, setLeagueNav] = useState(false);
  const [cupNav, setCupNav] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`${background} bg-no-repeat bg-center bg-cover  px-7 py-5`}>
      <div className="flex justify-between">
        <img src={logo} alt="fcblogo" className="w-[80px]" />
        <div className="flex text-[#f3f4f6] items-center">
          <ul className="flex gap-5 ">
            <li
              className="relative hover:text-gray-500 cursor-pointer"
              onMouseOver={() => setLeagueNav(true)}
              onMouseLeave={() => setLeagueNav(false)}
              onClick={()=> {navigate('/league')}}
            >
              League
              {leagueNav && <DropdownLeagueCup />}
            </li>
            <li
              className="relative hover:text-gray-500 cursor-pointer"
              onMouseOver={() => setCupNav(true)}
              onMouseLeave={() => setCupNav(false)}
            >
              Cups
              {cupNav && <DropdownCup />}
            </li>
            <li
            className="hover:text-gray-500 cursor-pointer"
            onClick={()=> {navigate('/see-tickets')}}
            >See Tickets</li>
            <li className=" hover:text-gray-500 cursor-pointer">About</li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default HeroSection;
