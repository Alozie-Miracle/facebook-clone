import React from 'react'

const Contact = ({ profile, name}) => {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
      <div>
        <img className='object-cover' style={{width:'50px', height:'50px', borderRadius:'50%'}} src={profile} alt={profile} />
      </div>
      <p>{name}</p>
      <div className='absolute bottom-2 left-7 bg-green-400 z-50 h-3 w-3  rounded-full animate-bounce' />
    </div>
  )
}

export default Contact
