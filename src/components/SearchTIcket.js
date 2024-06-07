import React from "react";

const SearchTIcket = () => {
  return (
    <div className="px-4 py-8">
      <div className="text-center text-slate-900">
        <h2 className="text-2xl font-bold mb-1 mt-2">THE BEST WEBSITE TO BUY TICKETS</h2>
        <p className="mb-1 mt-2">Search Tickets, Matches, Leagues and Cups!</p>
      </div>
      <div className="flex justify-center gap-2">
        <input type="text" placeholder="Search..." className="w-[40%] px-4 py-2 border border-gray-300 rounded-full" />
        <button className="bg-slate-800 text-gray-200 px-4 py-2 rounded-full ml-2" > Search </button>
      </div>
    </div>
  );
};

export default SearchTIcket;
