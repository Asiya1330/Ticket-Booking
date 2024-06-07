import React from "react";
import { FaFootball } from "react-icons/fa6";
import { IoMdList } from "react-icons/io";
import { HiSearch } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import Avatar from '../components/Avatar'

const AdminTopNavBar = ({ children }) => {
  return (
    <div className="p-5 bg-neutral-100 rounded-md">
      <div className="flex gap-10">
        <div className="flex bg-white rounded-md p-2 gap-4">
          <div className="flex gap-1 items-center">
            <FaFootball size={26} className="text-sky-600" />
            <h1 className="text-lg text-neutral-700 font-medium"> Football</h1>
          </div>
          <IoMdList size={24} className="text-sky-400 bg-sky-100 rounded-md" />
        </div>
        <div className="flex justify-between w-full items-center pr-2">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <div className="flex">
            <HiSearch size={32}/>
            <HiOutlineBell size={32}/>
            <div>
                <Avatar userName="Joshua" userRole={"Admin"}/>
            </div>   
            </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AdminTopNavBar;
