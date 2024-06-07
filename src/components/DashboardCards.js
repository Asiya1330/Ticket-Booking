import React from 'react'

const DashboardCards = ({header, headerDetails, info, infoHeader, infoDetails}) => {
  return (
    <div>
      <div className='w-[200px] bg-white h-full flex flex-col p-3 rounded-lg'>
        {header ?
        <h1 className='text-xl font-semibold text-black'>{header}</h1> : <br/>}
        {headerDetails ?
        <h2 className='text-base font-medium text-black'>{headerDetails} </h2> : <br/>}
        <span className='text-sm text-neutral-400 my-3'>{info}</span>
        <span className='text-base font-semibold text-black'>{infoHeader}</span>
        <span className='text-xs text-sky-300'>{infoDetails}</span>
      </div>
    </div>
  )
}

export default DashboardCards
