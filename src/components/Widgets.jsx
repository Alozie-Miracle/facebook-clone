import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { VideoCameraIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { stories as contacts } from '../stories'
import Contact from './Contact'

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500'>
        <h2 className='text-xl'>
          Contacts
        </h2>
        <div className='flex space-x-5 h-6 '>  
          <VideoCameraIcon className='cursor-pointer' />
          <MagnifyingGlassIcon className='cursor-pointer' />
          <EllipsisHorizontalIcon className='cursor-pointer' />
        </div>
      </div>

      {contacts.map(contact => (
        <Contact 
        name={contact.name}
        key={contact.src}
        profile={contact.profile}
        />
      ))}
    </div>
  )
}

export default Widgets
