import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import HeroSection from "../components/HeroSection";

const CheckoutPage = () => {
  const location = useLocation();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state.seats) {
      let totalprice = location.state.seats.reduce((sum, item) => {
        sum = sum + item.seatPrice;
        return sum;
      }, 0);
      setTotal(totalprice);
    }
  }, [location.state.seats]);

  return (
    <Layout>
      <HeroSection background="bg-ticket-page h-screen">
        <div className="w-full text-center flex justify-center items-center ">
          <div className="border p-7 overflow-auto h-[400px] flex flex-col justify-between">
            <div className="text-lg sm:text-3xl font-bold mb-8 text-white flex items-center  justify-center  text-center  ">
              <h2> Selected Seats </h2>
            </div>
            {location.state.seats.map((item) => (
              <div className="flex justify-between p-8 text-white">
                <span className="flex ">
                  <FaArrowCircleRight className="mr-3" size={24} />
                  {item.seatName}
                </span>
                <span>
                  {"£"}
                  {item.seatPrice}
                </span>
              </div>
            ))}
            <div className="flex flex-row justify-evenly text-white gap-2 items-center">
              <span>Your total budget will be {total}</span>
              <button className="border-2 px-4 py-1 rounded hover:text-slate-900 hover:bg-slate-400" onClick={() => {navigate("/thankyou")} }>
                Pay
              </button>
            </div>
          </div>
        </div>
      </HeroSection>
    </Layout>
  );
};

export default CheckoutPage;
