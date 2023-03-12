import React, { useRef, useState} from 'react'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { colRef } from '../firebaseConfig';
import { addDoc, serverTimestamp } from "firebase/firestore/lite";
import { getStorage, ref, uploadBytes, getDownloadURL   } from "firebase/storage";
import { useNavigate } from 'react-router';


const InputBox = () => {
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [Image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)


    const win = window.sessionStorage;
    const photo = win.getItem('photo')
    const name = win.getItem('name');
    const email = win.getItem('email');

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`user/${name}`)
    }


    const addImagePicker = async (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImage(readerEvent.target.result)
        }
        
        const file = e.target.files[0];
        const storage = getStorage();
        const storageRef = ref(storage, file.name);
        await uploadBytes(storageRef, file);
        await getDownloadURL(ref(storage, file.name)).then((url) =>{
            setImageUrl(url)
        })

    }
    
    const sendPost = (e) => {
        e.preventDefault();

        if(!inputRef.current.value) return;

        if(imageUrl) { 
            addDoc(colRef, {
                message: inputRef.current.value,
                name,
                photo,
                email,
                timeStamp: serverTimestamp(),
                imageUrl,
            })
            .then(() => {
                inputRef.current.value = "";
                setImage(null)
            })
        }

        else{
            addDoc(colRef, {
            message: inputRef.current.value,
            name,
            photo,
            email,
            timeStamp: serverTimestamp()
        })
        .then(() => {
            inputRef.current.value = "";
            setImage(null)

        })
        }
    };

  

  const removeImage = () => {
    setImage(null)
  }

  
  

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-md mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <img className='rounded-full cursor-pointer' src={photo} width={40} height={40} alt="selected" onClick={handleClick} />
            <form onSubmit={sendPost} className='flex flex-1'>
                <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none' type="text" 
                placeholder={`what's on your mind ${name}?`}
                ref={inputRef}
                />
                <button type='submit' className='hidden' >submit</button>
            </form>

            {Image && (
                <div onClick={removeImage} className='flex flex-col filter hover:brightness-105 transition transform duration-150 scale-105 cursor-pointer'>
                    <img className='h-10 object-contain' src={Image} alt="pictures" />
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}
        </div>
        <div className='flex justify-between p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500' />
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>
            <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
                <CameraIcon className='h-7 text-green-400' />
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                <input ref={filePickerRef} onChange={addImagePicker} className='hidden' type="file" />
            </div>
            <div className='inputIcon'>
                <FaceSmileIcon className='h-7 text-yellow-300' />
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}


export default InputBox
