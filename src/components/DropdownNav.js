import React, { useState } from "react";

const DropdownNav = ({
  header,
  items,
  Class,
  PremiereItems,
  PremiereItemsHeader,
}) => {
  const [Premiere, setPremiere] = useState(false);

  return (
    <div className={Class}>
      <div className="container bg-slate-800 rounded-md p-3">
        {header && (
          <h2 className="text-center text-yellow-400 text-xl">{header}</h2>
        )}
        <ul className="text-gray-100 text-xs font-semibold">
          {items.map(
            (item) => (
              (
                console.log(items==="Premiere League"),
                <li className="hover:text-gray-400"
                onMouseOver ={(items) => items === "Premiere League" ? setPremiere(true) : setPremiere(true)}>
                  {item}
                  {Premiere && item==="Premiere League" && (
                    <ul className="absolute right-[-80px] top-0 text-gray-100 text-xs font-semibold  bg-slate-800 rounded-md p-3 border-red">
                      {PremiereItemsHeader && (
                        <h2 className="text-center text-yellow-400 text-xl">

                          <li>{PremiereItemsHeader}</li>
                        </h2>
                      )}
                      {PremiereItems.map((PremiereItems) => (
                        <li className="hover:text-gray-400">{PremiereItems}</li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default DropdownNav;
