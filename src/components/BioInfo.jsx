import React, {useState} from 'react'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/solid'

const BioInfo = ({title, paragraph, paragraph2, paragraph3, skills, contactInfo}) => {
    const [drop, setDrop] = useState(true)
  return (
    <div className='mt-5 p-2 bg-white rounded-xl shadow-md'>
      <div className='flex  items-center justify-between border-b-2 p-2'>
        <h2 className='text-3xl '>{title}</h2>
        <div className="rounded-full h-9 w-9 flex items-center justify-center border border-blue-500 cursor-pointer">
        {drop ? <ChevronUpIcon className='h-5' onClick={()=> setDrop(!drop)}/> : <ChevronDownIcon className='h-5' onClick={()=> setDrop(!drop)}/>}
        </div>
      </div>
      {paragraph && drop && (
        <p className='p-2 mt-2 font-semibold text-base'>{paragraph}</p>
      )}
      {paragraph2 && drop && (
        <p className='p-2 mt-2 font-semibold text-base'>{paragraph2}</p>
      )}
      {paragraph3 && drop && (
        <p className='p-2 mt-2 font-semibold text-base'>{paragraph3}</p>
      )}
      {skills && drop && (
        <ul className='p-2 font-semibold text-base'>
            {skills.map((skill, id) => ( 
                <li className='p-1' key={id}>{skill.name}</li>
            ))}
        </ul>
      )}
      {contactInfo && drop && (
        <ul className='p-2 font-semibold text-base'>
            {contactInfo.map((contact, id) => ( 
                <div>
                    <li className='p-1' key={id}>{`Email: ${contact.email}`}</li>
                    <li className='p-1' key={id}>{`Phone: ${contact.phone}`}</li>
                    <li className='p-1' key={id}>{`Address: ${contact.Address}`}</li>
                </div>

            ))}
        </ul>
      )}
    </div>
  )
}

export default BioInfo
