import React from 'react'

const StoryCard = ({name, src, profile}) => {
  return (
    <div className='relative h-36 w-36 md:h-48 lg:h-56  cursor-pointer overflow-x p-2 transition duration-200 ease-in transform hover:scale-105 hover:animate-pulse'>
      <img src={profile} style={{width:"60px", height:'60px'}} alt="Profile" className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-5 object-cover' />
      <img src={src} alt="Storie" className='object-fill filter brightness-75 rounded-3xl lg:rounded-3xl lg:w-[200px] lg:h-[200px] w-[100%] h-[100%]'  />
    <p className='absolute opacity-0 lg:opacity-100 bottom-5 w-5/4 text-white text-sm font-bold truncate'>{name}</p>
    </div>
  )
}

export default StoryCard

