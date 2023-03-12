
import { getDocs, orderBy, query } from 'firebase/firestore/lite';
import React, { useState, useEffect } from 'react'
import { colRef } from '../firebaseConfig';
import Post from './Post';
import SamplePost from './SamplePost';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const userPost = async () => {
    const q = query(colRef, orderBy("timeStamp", "desc"));

    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => (
      {
        ...doc.data(),
        id: doc.id
      }
    )) 
    setPosts (data);
  }


  useEffect(() => {
    userPost();
  }, [])

    

  return (
    <div>
      {posts.map((post) => (
        <Post
          post={post.message} key={post.id}
          name={post.name}
          email={post.email}
          timeStamp={post.timeStamp}
          imageUrl={post.imageUrl}
          photo={post.photo}
          />
      ))}

      <SamplePost />
    </div>
  )
}

export default Posts
