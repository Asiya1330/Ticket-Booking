import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import HeroSection from "../components/HeroSection";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import {signup} from '../api/auth'
import toast from "react-hot-toast";
const SignupPage = () => {

  const submitForm = async (e) => {
    try{
    await signup(e.target.email.value, e.target.password.value, e.target.role.value);
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.role.value = "";
    toast.success("User successfully created");
    }catch(error){
      toast.error(`${error.response.data.error}, User creation failed`);
    }
  };
  
  return (
    <Layout>
      <HeroSection background="bg-hero-navbar h-screen">
        <div className="flex justify-center m-12">
          <div className="p-3  sm:w-[60%] bg-[#1b1a1a6b] flex justify-center">
            <form
              className="w-full max-w-sm flex flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                submitForm(e);
              }}
            >
              <h1 className="text-xl sm:text-5xl text-gray-100 text-center font-bold mb-6 ">
                Sign Up
              </h1>
              <span className="block text-gray-100 font-bold mb-2  text-xs sm:text-lg">
                Email Address
              </span>
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <span className="block text-gray-100 font-bold mb-2  text-xs sm:text-lg">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <span className="block text-gray-100 font-bold mb-2  text-xs sm:text-lg">
                Role
              </span>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
                name="role"
                required
                defaultValue={""}
              >
                <option value="" disabled>
                  select
                </option>
                <option value="admin">admin</option>
                <option value="employee">employee</option>
                <option value="standard">standard</option>
              </select>

              <div className="flex flex-col items-center gap-2 my-4">
                <Button
                  text="Sign Up"
                  textColor="text-white font-semibold"
                  type="submit"
                />
                <p className="text-sm text-white">
                  {" "}
                  {"Already have an account?"}
                  <Link className="text-yellow-500" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </HeroSection>
    </Layout>
  );
};

export default SignupPage;
