import React, { useState } from "react";
import Layout from "../layout/Layout";
import HeroSection from "../components/HeroSection";
import Button from '../components/Button';
import { Link, useNavigate } from "react-router-dom";
import {login} from '../api/auth'
import toast from "react-hot-toast";
const LoginPage = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const  loginFunction = async () =>{
  try{
    const result = await login(email, password);
    navigate("/");
    localStorage.setItem("accessToken", result.data.token);
    toast.success("Login Successful");
  } catch(error ){
    console.log(error.response.data.error);
    toast.error(error.response.data.error);
  }
}
  return (
    <Layout>
      <HeroSection background="bg-hero-navbar h-screen">
        <div className="flex justify-center m-16">
        <div className="p-8  sm:w-[60%] bg-[#1b1a1a6b] flex justify-center">
          <form className="w-full max-w-sm flex flex-col "
          onSubmit={(e)=>{e.preventDefault(); loginFunction();}}
          >
            <h1 className="text-xl sm:text-5xl text-gray-100 text-center font-bold mb-6 ">
              Login
            </h1>
           
            <span className="block text-gray-100 font-bold mb-2  text-xs sm:text-lg">Email Address</span>
            <input type="email" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <span className="block text-gray-100 font-bold mb-2  text-xs sm:text-lg">Password</span>
            <input type="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-between gap-2 my-4">
            <Button text="Login" textColor="text-white font-semibold" type="submit"/>
            <Link className="text-xs text-gray-300 hover:text-gray-500 font-medium" to="/signup">Create an Account</Link>
            </div>
          </form>
        </div>
        </div>
      </HeroSection>
    </Layout>
  );
};

export default LoginPage;
