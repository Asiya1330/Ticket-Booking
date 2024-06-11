import React from 'react'
import avatarImg from '../assets/images/avatar.png'

const Avatar = ({image = avatarImg, userName, userRole, spanHeader = "text-neutral-800", spanDetails = "text-neutral-500"}) => {
  return (
    <div className='flex gap-2 rounded-md'>
      <img src={image} alt="Avatar" className='rounded-[50%] size-8'/>
      <div className='flex flex-col'>
      <span className={`text-xs font-medium ${spanHeader} `}>{userName}</span>
      <span className={`text-xs ${spanDetails}`}>{userRole}</span>
      </div>
    </div>
  )
}

export default Avatar
