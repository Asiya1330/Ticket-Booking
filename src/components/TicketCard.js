import React, { useEffect, useState } from 'react'
const TicketCard = ({header, price, ticketCardOnclick}) => {

const [completePrice, setCompletePrice] = useState();


    useEffect(() => {
        setCompletePrice("£" + price);
    },[price])

  return (
    <div className='p-8 hover:translate-y-[-0.25rem] hover:bg-gray-100 transition duration-300 bg-black rounded-md hover:cursor-pointer' onClick={ticketCardOnclick}>
    <h3 className='font-bold text-lg mb-2 text-gray-500 '>{header}</h3>
    <p className='text-xl text-yellow-500 font-semibold mb-4'>{completePrice}</p>
    <button className=" p-2 bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded-md" onClick={ticketCardOnclick}> Buy Now </button>
    </div>
  )
}

export default TicketCard
