import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const TicketInfo = ({ ticketDate, TicketDetails }) => {
  const [completeDate, setcompleteDate] = useState();

  useEffect(() => {
    setcompleteDate("Date: " + ticketDate);
  }, [ticketDate]);

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-md flex justify-between flex-col w-[30%]">
      <p className="text-gray-200 mb-2">{completeDate}</p>
      <p className="text-gray-400 font-bold mb-2">{TicketDetails}</p>
      <a
        className=" bg-transparent hover:bg-slate-400 border-2 text-white font-bold py-2 px-4 rounded flex justify-between"
        href="/tickets"
      >
        Book Tickets
        <FaArrowCircleRight size={24} />
      </a>
    </div>
  );
};

export default TicketInfo;
