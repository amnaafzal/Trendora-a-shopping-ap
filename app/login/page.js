'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useLoginUserMutation } from '../features/auth/authApi';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { setUser } from '../features/auth/authSlice';



const page = () => {

  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();
  const dispatch = useDispatch()
  const [loginUser, { isLoading: loginloading }] = useLoginUserMutation()





  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }

    try {
      const response = await loginUser(data).unwrap();
      const {user, token} = response;
      dispatch(setUser({user}))
      alert("Login successfully!");
      router.push("/");
    } catch (error) {
      setMessage("invalid email or password")
    }
  }


  return (
    <div className='w-full h-[70vh] flex justify-center items-center'>

      <div className="loginSection flex flex-col gap-6 justify-center items-center  bg-white shadow-2xl p-10 rounded-md">
        <h1 className='font-semibold text-xl'>Login Here</h1>

        <form action="" className='flex flex-col justify-center items-center gap-4' onSubmit={handleSubmit}>
          <input type="text" id='email' name='email' placeholder='Enter Email' className='w-60 border border-gray-500 outline-none bg-gray-100 px-1 py-1 rounded-md' onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" id='password' name='password' placeholder='Entr password' className='w-60 border border-gray-500 outline-none bg-gray-100 px-1 py-1 rounded-md' onChange={(e) => setPassword(e.target.value)} required />

          {message && <p className='text-red-600 text-sm'>{message}</p>}

          <button type="submit" className='px-3 py-1 rounded-md bg-red-500 hover:bg-indigo-500 w-full cursor-pointer text-white font-semibold'>Login</button>

        </form>

        <p>Don't have an account. <Link href={'/register'} className='text-red-600 underline'>Register</Link> here.</p>

      </div>
    </div>
  )
}

export default page
