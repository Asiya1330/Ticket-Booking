import React, { useState } from "react";

const DropdownCup = () => {
  const [fadrop, setFa] = useState(true);
  const [efl, setEfl] = useState(false);
  return (
    <div>
      <ul className="text-gray-100 text-xs font-semibold absolute  bg-slate-800 rounded-md p-3 w-[70px]">
        <li
          className="hover:text-gray-500 cursor-pointer"
          onMouseOver={() => setFa(true)}
          onMouseLeave={() => setFa(false)}
        >
          {"FA Cup"}
        </li>

        <li
          className="hover:text-gray-500 cursor-pointer"
          onMouseOver={() => setEfl(true)}
          onMouseLeave={() => setEfl(false)}
        >
          EFL Cup
        </li>
      </ul>

      {fadrop && (
        <ul
          className="absolute right-[-160px] top-[10] text-xs font-semibold  bg-slate-800 rounded-md p-3 text-gray-100 "
          onMouseOver={() => setFa(true)}
          onMouseLeave={() => setFa(false)}
        >
          <li className="text-yellow-400 text-xl">
            <h2> Teams</h2>
          </li>
          <li>Bury AFC</li>
          <li>Ashington AFC</li>
          <li>SevenOaks Town FC</li>
          <li>Grimsby Town FC</li>
          <li>Beckenham Town FC</li>
          <li>Manchester City FC</li>
          <li>Alvechurch FC</li>
          <li>Aston Villa</li>
          <li>Anstey Nomads</li>
          <li>Wrexham FC</li>
          <li>Hanly Town FC</li>
          <li>Farnborough FC</li>
          <li>Fisher FC</li>
          <li>Romford FC</li>
          <li>Coalville Town FC</li>
        </ul>
      )}

      {efl && (
        <ul
          className="absolute right-[-135px] top-[50px] text-xs font-semibold  bg-slate-800 rounded-md p-3 text-gray-100 "
          onMouseOver={() => setEfl(true)}
          onMouseLeave={() => setEfl(false)}
        >
          <li className="text-yellow-400 text-xl">
            <h2> Teams</h2>
          </li>
          <li>Middlesbrough</li>
          <li>Coventry City</li>
          <li>Luton Town</li>
          <li>Sunderland</li>
          <li>Benfica</li>
          <li>Burnley</li>
          <li>Millwall</li>
          <li>Watford</li>
          <li>Swansea City</li>
          <li>Norwich City</li>
          <li>Stoke City</li>
          <li>Bristol City</li>
          <li>Birmingham City</li>
          <li>Cardiff City</li>
          <li>Reading</li>
          <li>Blackpool</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownCup;
