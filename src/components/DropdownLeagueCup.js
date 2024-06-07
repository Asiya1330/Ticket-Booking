import React, { useState } from "react";

const DropdownLeagueCup = () => {
  const [premier, setPremiere] = useState(false);
  const [champions, setChampions] = useState(false);
  
  return (
    <div>
      <ul className="text-gray-100 text-xs font-semibold absolute  bg-slate-800 rounded-md p-3 ">
        <li
          className="break-words hover:text-gray-500 cursor-pointer "
          onMouseOver={() => setPremiere(true)}
          onMouseLeave={() => setPremiere(false)}
        >
          {" "}
          Premiere League{" "}
        </li>

        <li className="break-words hover:text-gray-500 cursor-pointer"
        onMouseOver={() => setChampions(true)}
        onMouseLeave={() => setChampions(false)}
        >
          {" "}
          Champions League{" "}
        </li>
      </ul>

      {premier && (
        <ul className="absolute right-[-140px] top-[10] text-xs font-semibold  bg-slate-800 rounded-md p-3 text-gray-100 "
        onMouseOver={() => setPremiere(true)}
        onMouseLeave={() => setPremiere(false)}
        >
          <li className="text-yellow-400 text-xl">
            <h2> Teams</h2>
          </li>
          <li>Manchester City</li>
          <li>Arsenal</li>
          <li>Newcastle United</li>
          <li>Manchester United</li>
          <li>Liverpool</li>
          <li>Tottenham</li>
          <li>Brighton</li>
          <li>Aston Villa</li>
          <li>Brentford</li>
          <li>Fulham</li>
          <li>Chelsea</li>
          <li>Crystal Palace</li>
          <li>Wolverhampton</li>
          <li>West Ham</li>
          <li>Nottingham Forest</li>
          <li>Everton</li>
          <li>Leicester City</li>
          <li>Leeds</li>
          <li>Southampton</li>
        </ul>
      )}
     
     {champions && (
        <ul className="absolute right-[-140px] top-[70px] text-xs font-semibold  bg-slate-800 rounded-md p-3 text-gray-100 "
        onMouseOver={() => setChampions(true)}
        onMouseLeave={() => setChampions(false)}>
          <li className="text-yellow-400 text-xl">
            <h2> Teams</h2>
          </li>
          <li>AC Milan</li>
          <li>Manchester City</li>
          <li>Real Madrid CF</li>
          <li>FC Bayern Munich</li>
          <li>Benfica</li>
          <li>Chelsea</li>
          <li>Napoli</li>
          <li>Club Brugge</li>
          <li>Borussia Dortmund</li>
          <li>RB Leipzing</li>
          <li>PSG</li>
          <li>FC Porto</li>
          <li>FC Barcelona</li>
          <li>Ajax</li>
          <li>Ceitic FC</li>
          <li>Juventus</li>
        </ul>
      )}

    </div>
  );
};

export default DropdownLeagueCup;
