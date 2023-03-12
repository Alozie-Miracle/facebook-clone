import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {
  HomeIcon,
  UserGroupIcon,
  ChevronDownIcon
} from '@heroicons/react/24/solid';

import {PlusIcon} from '@heroicons/react/20/solid'

import {
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  BellIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'

import HeaderIcon from './HeaderIcon';


const Navbar = () => {

  const win = window.sessionStorage;

  const displayName = win.getItem('name')
  const photo =  win.getItem('photo')

  const logout = () => {
    win.removeItem('accessToken')
    win.removeItem('photo')
    win.removeItem('name')

    window.location.reload(true)
  }

  return (
    <div className='flex items-center p-2 lg:px-5 shadow-md sticky top-0 z-50 bg-white'>
      {/* left */}
      <div className='flex items-center'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"  alt="fb-logo" width={40} height={40} />

        <div className='hidden md:inline-flex ml-2 mt-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='text-gray-600 ' />
          <input className='border-none outline-none bg-transparent  ml-2 placeholder-gray-500' type="text" placeholder='Search Facebook' />
        </div>
      </div>

      {/* center */}
      <div className='flex flex-shrink justify-center flex-grow'>
        <div className='flex space-x-5 md:space-x-6'>
          <HeaderIcon
          Icon={HomeIcon}
          active={true}
          />
          <HeaderIcon
          Icon={FlagIcon}
          />
          <HeaderIcon
          Icon={PlayIcon}
          />
          <HeaderIcon
          Icon={ShoppingCartIcon}
          />
          <HeaderIcon
          Icon={UserGroupIcon}
          />
        </div>
      </div>

      {/* right */}
      <div className='flex items-center justify-end sm:space-x-2' >
        {/* profile pics */}
        <img className='rounded-full' onClick={logout}  src={photo} alt="Your Profile Pics" />
        <p className='hidden lg:inline-flex whitespace-nowrap font-semibold pr-3'>{displayName}</p>
        <PlusIcon className='icons' />
        <ChatBubbleLeftIcon className='icons' />
        <BellIcon className='icons' />
        <ChevronDownIcon className='icons' />
      </div>
    </div>
  )
}

export default Navbar
