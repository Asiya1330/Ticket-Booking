import React from "react";
import mbappe from "../assets/images/mbappe.png";
const MatchHeader = ({ leftImage = mbappe }) => {
  return (
    <div className="bg-neutral-100 rounded-md">
      <div className="bg-white rounded-md">
        <div className="rounded-l-md flex">
          <img src={leftImage} alt="leftMatchImage" />
          <div>
            
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MatchHeader;
