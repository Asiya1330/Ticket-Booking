import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Seats = ({ items, onClick }) => {
  const [seatSelected, setSeatSelected] = useState([]);
  const navigate = useNavigate();
  const activeStyle =
    "text-gray-800  font-bold cursor-pointer flex flex-wrap m-2 p-2 flex-row w-[60px] align-middle justify-center rounded-full border-2 border-white gap-1";
  const clickedStyle =
    "bg-yellow-400 font-bold cursor-pointer flex flex-wrap m-2 p-2 flex-row w-[60px] align-middle justify-center rounded-full border-2 border-white gap-2";

  const seatOnclick = (itemName) => {
    if (
      seatSelected.filter((item) => item.seatName !== itemName.seatName).length ===
      seatSelected.length
    ) {
      setSeatSelected([...seatSelected, {seatName: itemName.seatName, seatPrice: itemName.seatPrice}]);
    } else {
      const updateSeat = seatSelected.filter(
        (seat) => seat.seatName !== itemName.seatName
      );
      setSeatSelected(updateSeat);
    }
    console.log(seatSelected)
  };

  return (
    <div className="flex flex-col gap-3 justify-center">
      <div className=" bg-[#9c9c9c6b] border-gray-400 m-auto flex rounded flex-wrap justify-between">
        {items.map((item) => (
          <button className={seatSelected.filter((seat)=> {return seat.seatName === item.seatName}).length  ? clickedStyle : activeStyle} onClick={() => seatOnclick(item)}>
            {item.seatName} {seatSelected.filter((seat)=> {return seat.seatName === item.seatName}).length  ? <FaMinus size={10} className="self-center"/>: <FaPlus size={10} className="self-center"/> }
          </button>

        ))}
      </div>
      {seatSelected.length > 0 ? (
        <div className="self-center">
          <button
            className="text-xs font-bold text-white border-2 p-2 rounded hover:bg-yellow-400 hover:text-white flex w-[200px]"
            onClick={() => {navigate('/checkout/', { state: { seats: seatSelected } });}}>
        
            <span className="mr-1">PROCEED TO CHECKOUT</span>
            <FaArrowCircleRight className="mr-3 self-center" size={24}/>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Seats;
