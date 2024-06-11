import React from "react";
import mbappe from "../assets/images/mbappe.png";
import messi from "../assets/images/messi.png";
import { CgMediaLive } from "react-icons/cg";
const MatchOverview = ({ leftImage = mbappe, rightImage = messi }) => {
  return (
    <div className="flex justify-center items-center p-5  rounded-md max-w-3xl m-auto relative flex-col">
      <div className="flex p-5 flex-col">
        <div className="absolute -left-4 -top-2">
          <img src={leftImage} alt="leftMatchImage" className="max-h-80 " />
          <p className="text-center"> Left Team</p>
        </div>
        <span className="px-2 flex items-center font-medium bg-gray-200 rounded-lg my-2 w-fit"><CgMediaLive className="text-red-600"/>Live</span>
        <div className="flex">
          <div className="bg-gray-200  p-5 rounded-l-xl flex mr-2">
            <div>
              <div className="flex justify-between">
              <h3>Left Team</h3>
              <p>175-5</p>
              </div>
              <p>R. Jadeja: 63 (45)</p>
              <p>M. Rayudu: 40 (22)</p>
            </div>
          </div>
          <div className="flex bg-gray-200  p-5 rounded-r-xl gap-3">
            <div className="">
              <h3>Right Team</h3>
              <p>156-2</p>
              <p>AB de Villiers: 56 (30)</p>
              <p>Maxwell: 42 (18)</p>
            </div>
          </div>
        </div>
        <div className="absolute -right-4 -top-2 flex flex-col">
          <img src={rightImage} alt="leftMatchImage" className="max-h-80  " />
          <p className="text-center">right Team</p>
        </div>
      </div>
    </div>
  );
};

export default MatchOverview;
