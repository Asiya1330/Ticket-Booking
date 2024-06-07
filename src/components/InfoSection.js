import React from 'react'
import StepSection from './StepSection'
import TicketInfo from './TicketInfo'

const InfoSection = () => {
  return (
    <div>
    <div className='bg-hero-section bg-no-repeat bg-center bg-cover  py-16'>
      <h2 className="text-3xl text-gray-200 font-semibold text-center mb-8 drop-shadow-xl"> How to buy football tickets</h2>
      <div className='flex justify-center gap-5 container mx-auto'>
        <StepSection h2Text={"Step 1: Choose your match"} paragraph={"Browse the list of available matches and choose the one you want to attend."}/>
        <StepSection h2Text={"Step 2: Select your seats"} paragraph={"Choose the seats you want from the stadium seating chart. Go to tickets and book now!"}/>
        <StepSection h2Text={"Step 3: Select number of tickets"} paragraph={"Choose the number of tickets you want to purchase and add them to your cart."}/>
      </div>
    </div>
    <div>
        <div className='container mx-auto'>
        <section className='bg-gray-100 py-12'>
        <h2 className="text-3xl font-bold mb-4 text-center"> Quick Selling </h2>
        <div className="flex gap-4 w-full justify-center">
        <TicketInfo ticketDate={"05/23/2024"} TicketDetails={"Match Name: Real Madrid vs Barcelona"}/>
        <TicketInfo ticketDate={"05/27/2024"} TicketDetails={"Match Name: Arsenal vs PSG"}/>
        <TicketInfo ticketDate={"05/31/2024"} TicketDetails={"Match Name: Real Madrid vs America"}/>    
        </div>
        </section>
        </div>
    </div>
    </div>
  )
}

export default InfoSection
