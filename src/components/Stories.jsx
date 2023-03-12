import React from 'react'
import { stories } from '../stories'
import StoryCard from './StoryCard'

const Stories = () => {
  return (
    <div className='flex overflow-scroll scrollbar-hide justify-center mx-auto'>
      {stories.map(({name, src, profile}, key) => ((
        <StoryCard key={key} name={name} src={src} profile={profile} />
      )))}
    </div>
  )
}

export default Stories
