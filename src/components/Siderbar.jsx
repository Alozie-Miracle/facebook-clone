import React from 'react'

import { 
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

import { CalendarIcon, ClockIcon, UsersIcon } from '@heroicons/react/20/solid';
import { ComputerDesktopIcon } from '@heroicons/react/24/solid';
import SiderbarRow from './SiderbarRow';


const Siderbar = () => {
  const win = window.sessionStorage;
  const displayName = win.getItem('name')
  const photo =  win.getItem('photo')
  

  
  return (
    <div className='hidden sm:block bg-gray-100 p-2 mt-5 max-w-[300px] xl:max-w-[600px]'>
      <SiderbarRow src={photo} title={displayName} 
      
      />
      <SiderbarRow Icon={UsersIcon} title='friends' />
      <SiderbarRow Icon={UserGroupIcon} title='Groups' />
      <SiderbarRow Icon={ShoppingBagIcon} title='Maketplace' />
      <SiderbarRow Icon={ComputerDesktopIcon} title='Watch' />
      <SiderbarRow Icon={CalendarIcon} title='Events' />
      <SiderbarRow Icon={ClockIcon} title='Memories' />
      <SiderbarRow Icon={ChevronDownIcon} title='See More' />

    </div>
  )
}

export default Siderbar
