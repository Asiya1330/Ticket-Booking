import React from 'react'
import Button from "./Button";
const GetTickets = () => {
  return (
    <div className="p-[20px] bg-[#0000006b] w-[60%] mb-[10%] left-1/2 m-auto text-center text">
    <div className="text-[#ffffff] flex flex-col justify-evenly h-52">
      <h1 className="text-4xl font-bold">Get Your Tickets Now!</h1>
      <p className="text-[12px]">
        Stay up to date with the latest football news, scores, and
        highlights. Join the excitement and immerse yourself in the world of
        football. Explore our expert analysis, player stats, and team
        rankings. Whether you're a die-hard fan or a casual observer, we
        have everything you need to keep your finger on the pulse of the
        football world. Get ready for an unforgettable football experience!
      </p>
    </div>
    <div className="text-[#ffffff]">
      <Button text={"Buy Tickets"}></Button>
    </div>
  </div>
  )
}

export default GetTickets
