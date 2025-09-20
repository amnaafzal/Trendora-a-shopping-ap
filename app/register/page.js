'use client'

import React, { useState } from 'react';
import Link from 'next/link';


const page = () => {

    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        const data = {
            username,
            email,
            password,
        }

        console.log(data)
    }


    return (
        <div className='w-full h-[70vh] flex justify-center items-center'>

            <div className="loginSection flex flex-col gap-6 justify-center items-center  bg-white shadow p-10 rounded-md">
                <h1 className='font-semibold text-xl'>Register Here</h1>

                <form action="" className='flex flex-col justify-center items-center gap-4' onSubmit={handleRegister}>
                    <input type="text" id='username' name='username' placeholder='Enter Username' className='w-60 border border-gray-500 outline-none bg-gray-100 px-1 py-1 rounded-md' onChange={(e) => setUsername(e.target.value)} required/>
                    <input type="text" id='email' name='email' placeholder='Enter Email' className='w-60 border border-gray-500 outline-none bg-gray-100 px-1 py-1 rounded-md' onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" id='password' name='password' placeholder='Entr password' className='w-60 border border-gray-500 outline-none bg-gray-100 px-1 py-1 rounded-md' onChange={(e) => setPassword(e.target.value)} required/>

                    {message && <p className='text-red-600 text-sm'>{message}</p>}

                    <button type="submit" className='px-3 py-1 rounded-md bg-red-500 hover:bg-indigo-500 w-full cursor-pointer text-white font-semibold'>Register</button>

                </form>

                <p>Already have an account. <Link href={'/login'} className='text-red-600 underline'>Login</Link> here.</p>

            </div>
        </div>
    )
}

export default page
