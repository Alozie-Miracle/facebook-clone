import React from 'react'
import {  ChatBubbleBottomCenterTextIcon, HandThumbUpIcon, ShareIcon } from '@heroicons/react/24/outline'

import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

const SamplePost = ()=> {
  const navigate = useNavigate()

  
  const handleClick = () => {
    navigate('user/Alozie');
  }

  return (
    <div className='flex flex-col'>
      
      {/* sample post */}

      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2 border-b pb-2'>
          <img src='images\IMG_0893.jpeg' alt="Profile"  className='rounded-full w-[40px] h-[40px] object-cover cursor-pointer' onClick={handleClick} />
          <div>
            <p className='font-md text-gray-400'>Alozie Miracle Patrick</p>
            <p className='text-xs text-gray-500'>{ new Date().getMinutes()  }m ago</p>
          </div>
        </div>
        <p className='pt-4'>Hi guys, welcome to my facebook clone, Click the above image to see my Profile  and click the image in the input box to see yours.</p> 
        <div className='flex items-center'>
           My Github 
          <ArrowLongRightIcon className='h-5 pl-2' /> <a className='pl-2 text-blue-600' rel="noreferrer" href="https://github.com/Alozie-Miracle?tab=repositories" target='_blank'>my Github</a>
        </div>
      </div> 
      

      {/* footer of the post*/}

      <div className='flex justify-between items-center rounded-b-2xl shadow-md text-gray-400 border-t'>
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <HandThumbUpIcon className='h-5' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon rounded-none '>
          <ChatBubbleBottomCenterTextIcon className='h-5' />
          <p className='text-xs sm:text-base'>Comment</p>

        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
          <ShareIcon className='h-5 ' />
          <p className='text-xs sm:text-base'>Share</p>

        </div>
      </div>

      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2 border-b pb-2'>
            <img src='images\IMG_0893.jpeg' alt="Profile"  className='rounded-full w-[40px] h-[40px] object-cover cursor-pointer' onClick={handleClick} />
            <div>
              <p className='font-md text-gray-400'>Alozie Miracle Patrick</p>
              <p className='text-xs text-gray-500'>{ new Date().getMinutes() + 3 }m ago</p>
            </div>
        </div>
        <p className='pt-4'>Hi guys, welcome to my facebook clone, also checkout my Airbnb clone </p> 
        <div className='flex items-center'>
          link
          <ArrowLongRightIcon className='h-5 pl-2' /> <a className='pl-2 text-blue-600' rel="noreferrer" href="https://airbnb-nine-self.vercel.app/" target='_blank'>airbnb clone</a>
        </div>
      </div> 
      <div className='h-56 md:h-96'>
          <img src='images/Screenshot.png' className='object-fill h-[100%]' alt="user post content" />
      </div>

      {/* footer of the post*/}

      <div className='flex justify-between items-center rounded-b-2xl shadow-md text-gray-400 border-t'>
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <HandThumbUpIcon className='h-5' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon rounded-none '>
          <ChatBubbleBottomCenterTextIcon className='h-5' />
          <p className='text-xs sm:text-base'>Comment</p>

        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
          <ShareIcon className='h-5 ' />
          <p className='text-xs sm:text-base'>Share</p>

        </div>
      </div>

      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2 border-b pb-2'>
            <img src='images\IMG_0893.jpeg' alt="Profile"  className='rounded-full w-[40px] h-[40px] object-cover cursor-pointer' onClick={handleClick} />
            <div>
              <p className='font-md text-gray-400'>Alozie Miracle Patrick</p>
              <p className='text-xs text-gray-500'>{ new Date().getMinutes() + 7 }m ago</p>
            </div>
        </div>
        <p className='pt-4'>Hi guys, welcome to my facebook clone, also checkout my Admin Dashboard </p> 
        
      </div> 
      <div className='h-56 md:h-96'>
          <img src='images/admin-dashboard.png' className='object-fill h-[100%]' alt="user post content" />
      </div>

      {/* footer of the post*/}

      <div className='flex justify-between items-center rounded-b-2xl shadow-md text-gray-400 border-t'>
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <HandThumbUpIcon className='h-5' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon rounded-none '>
          <ChatBubbleBottomCenterTextIcon className='h-5' />
          <p className='text-xs sm:text-base'>Comment</p>

        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
          <ShareIcon className='h-5 ' />
          <p className='text-xs sm:text-base'>Share</p>

        </div>
      </div>
    </div>
  )
}

export default SamplePost

//https://github.com/Alozie-Miracle?tab=repositories