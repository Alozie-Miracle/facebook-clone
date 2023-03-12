import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { authentication } from "../firebaseConfig";
import React from 'react'


const Login = () => {
  const win = window.sessionStorage;

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res) => {
      const displayName = res?.user?.displayName;
      const accessToken =  res?.user?.accessToken;
      const photo = res?.user?.photoURL;
      const email = res?.user?.email;
      win.setItem('name', displayName)
      win.setItem('accessToken', accessToken)
      win.setItem('photo', photo)
      win.setItem('email', email)
      window.location.reload(true);
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

    
  return (
    <div className='grid place-items-center my-auto h-screen'>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" className="objectFit-contain"  alt="fb-logo" width={200} height={200}  />
      <button className='mt-20 p-5 px-10 bg-blue-500 rounded-full text-center text-white cursor-pointer' onClick={signInWithFacebook}>Sign In with Facebook</button>
      </div>
        
    </div>
  )
}

export default Login
