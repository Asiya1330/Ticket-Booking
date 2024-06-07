import React from 'react'
import { PiPlusCircle } from "react-icons/pi";

const StepSection = ({h2Text, paragraph}) => {
  return (
   
    <div className="bg-white rounded-lg shadow-lg p-8 w-[30%]">
      <PiPlusCircle className=" w-12 sm:w-[20px] text-green-600 mb-4"/>
      <h2 className="text-lg font-semibold mb-4">{h2Text}</h2>
      <p className='text-gray-600'>{paragraph}</p>
    </div>

  )
}

export default StepSection
