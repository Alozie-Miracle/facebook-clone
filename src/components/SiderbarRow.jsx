import React from 'react'
import { useNavigate } from "react-router-dom";
const SiderbarRow = ({Icon, title, src}) => {
  const navigate = useNavigate();
  const win = window.sessionStorage;

  const name = win.getItem('name')
  const handleClick = () => {
    navigate(`/user/${name}`);
  }
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer '>
        {src && (
            <img src={src} alt="Profile" width={30} height={30} className='rounded-full' onClick={handleClick}/>
            
        )}
        {Icon && (
            <Icon className='h-8 w-8 text-blue-500' />
        )}
        <p className='hidden md:inline-flex font-medium'>{title}</p>
      
    </div>
  )
}

export default SiderbarRow
