import React from 'react'
import {  ChatBubbleBottomCenterTextIcon, HandThumbUpIcon, ShareIcon } from '@heroicons/react/24/outline'

import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

const Post = ({ post, imageUrl, name, photo, timeStamp })=> {
  const navigate = useNavigate()

  
  const handleClick = () => {
    navigate(`/user/${name}`);
  }

  return (
    <div className='flex flex-col'>
      { post && (
        <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm '>
        <div className='flex items-center space-x-2 border-b'>
          <img src={photo} alt="Profile" width={40} height={40} className='rounded-full' onClick={handleClick} loading='lazy' />
          <div>
            <p className='font-md text-gray-400'>{name}</p>
            <p className='text-xs text-gray-500 p-1'>{ new Date(timeStamp?.toDate()).toLocaleString()}</p>
          </div>
        </div>
        <p className='pt-4'>{post}</p>
      </div>
      )}

      {imageUrl && (
        <div className='h-56 md:h-96'>
          <img src={imageUrl} className='object-fill w-[100%] h-[100%]' alt="user post content"  />
        </div>
      )} 

      {/* footer of the post */}

      {post && (
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
          <ShareIcon className='h-5' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
      )}

    </div>
  )
}

export default Post

//https://github.com/Alozie-Miracle?tab=repositories
