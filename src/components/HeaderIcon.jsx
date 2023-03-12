import React from 'react'

const HeaderIcon = ({Icon, active}) => {
  return (
    <div className='flex items-center rounded-xl text-gray-500 cursor-pointer md:px-3 sm:h-14 md:hover:bg-gray-100 hover:text-blue-500  active:border-b-2 active:border-blue-500 flex-shrink'>
      <Icon className={`h-5 text-center sm:h-6 mx-auto ${active && "text-blue-500"}`} />
    </div>
  )
}

export default HeaderIcon

