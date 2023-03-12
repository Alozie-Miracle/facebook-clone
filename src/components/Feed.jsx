import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

const Feed = () => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
      <div className='mx-auto max-w-[450px] md:max-w-[550px] lg:max-w-3xl'>
        {/* Stories */}
      <Stories />
      
      {/* InputBox */}
      <InputBox />

      {/* Posts */}
      <Posts />
      </div>
    </div>
  )
}

export default Feed
