import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Button from '../components/Button'
import { useNavigate } from "react-router-dom";
import {UserContext} from '../context/UserContext';
import { useContext, useEffect } from "react";
import Avatar from "../components/Avatar";
const Navbar = () => {
  const navigate = useNavigate();
 const {firstName:fname, lastName:lname, role: contextRole} = useContext(UserContext);
 const fullName = fname + " " + lname;
  return (
    <div className="bg-slate-800 text-gray-100 flex justify-between py-2 px-10 items-center">
      <div className="flex gap-1">
        <SlSocialGoogle size={20} />
        <SlSocialInstagram size={20} />
        <SlSocialFacebook size={20} />
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 ">
          <MdPhone size={20} />
          <p>+23-555-1123</p>
        </div>
        <div className="flex gap-2 items-center">
        <HiOutlineMail size={20}/>
        <p>football@mail.com</p>
        </div>
        <div>
          { fullName && contextRole ? 
          <Avatar userName={fullName} userRole= {contextRole} spanDetails="text-white" spanHeader="text-white"/>
          :
         <Button text={"Sign In / Sign Up"} onclick={() => {navigate("/login")}}></Button>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
