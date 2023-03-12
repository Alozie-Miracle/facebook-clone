import React from 'react'
import {  ArrowLeftIcon, CameraIcon, FaceSmileIcon, PlusIcon, PencilIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom'
import { bio, contact, Education, skillset } from '../stories';
import BioInfo from './BioInfo';

const MyProfile = () => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/');
    }

  return (
     <div className='flex-grow h-screen pb-44 pt-6 xl:mr-40 overflow-y-auto scrollbar-hide p-2'>
        <div className='relative h-[50%] w-[100%] lg:w-[80%] mx-auto mb-40'>
            <img src='images/download-color.jpg' alt="cover" className='h-[100%] w-[100%] object-fill' />
            <div className='absolute left-2 top-2 flex items-center justify-center rounded-full h-12 w-12 bg-white cursor-pointer hover:opacity-80 z-50'>
                <ArrowLeftIcon className='h-5' onClick={handleClick} />
            </div>
            <div className='absolute bottom-5 right-5 flex flex-col space-y-6' >
                <div className='bg-white rounded-full h-[52px] w-[52px] flex items-center justify-center'>
                    <div className=' bg-blue-500 rounded-full h-12 w-12 text-white flex items-center justify-center cursor-pointer'><FaceSmileIcon className='h-6 z-50' /></div>
                </div>
                <div className='bg-white rounded-full h-[52px] w-[52px] flex items-center justify-center'>
                    <div className=' bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center cursor-pointer'><CameraIcon className='h-6 z-50' /></div>
                </div>
            </div>
            <div className='absolute top-[90%] lg:top-[60%] xl:left-[40%]'>
                <div className=' h-[120px] w-[120px]  lg:w-[120px] xl:h-[210px] xl:w-[210px] rounded-full'>
                    <img src='images/IMG_0885.jpeg' alt="profile" className='h-[120px] w-[120px] lg:h-[120px] lg:w-[120px] xl:h-[200px] xl:w-[200px] rounded-full object-cover cursor-pointer border border-white' />
                </div>
                <div className='relative'>
                    <div className='absolute -top-10 right-28 md:right-28 xl:right-16 lg:-top-12 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer border border-white'>
                    <CameraIcon className='h-6' />
                    </div>
                </div>
                <h2 style={{fontFamily: 'revert'}} className='text-2xl font-semibold pt-4 flex items-center justify-center'>Alozie Miracle Patrick</h2>
            </div>
        </div>
        <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row md:items-center md:justify-center'>
            <div className='flex-grow flex items-center justify-center text-white cursor-pointer bg-blue-600 h-10 rounded-lg'><PlusIcon className='h-5 mr-2' /> Add to Story</div>
            <div className='flex flex-grow'>
                <div className='flex-grow flex items-center justify-center bg-gray-200 h-10 rounded-lg cursor-pointer'><PencilIcon className='h-5 mr-2' /> Edit Profile</div>
                <div className='flex items-center justify-center rounded-lg ml-2 w-10 bg-gray-200 cursor-pointer md:hidden'><EllipsisHorizontalIcon className='h-5 cursor-pointer ' /></div>
            </div>
        </div>
        <BioInfo title='My Bio' paragraph={bio} />
        <BioInfo title='Education' paragraph={`School: ${Education[0].school}`} paragraph2={`Degree: ${Education[0].degree}`} paragraph3={`Graduated: ${Education[0].graduated}`} />
        <BioInfo title='Skills' skills={skillset} />
        <BioInfo title='Contact' contactInfo={contact} />
        
    </div>
  )
}

export default MyProfile
