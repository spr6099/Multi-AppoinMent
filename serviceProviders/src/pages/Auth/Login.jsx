import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from "../../context/DoctorContext"
import { toast } from 'react-toastify'

const Login = () => {

    const [state, setState] = useState("login");

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password)
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const { setDToken } = useContext(DoctorContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const { data } = await axios.post(backendUrl+'/api/provider/login', { email, password })
        // console.log(data)
        if (data.success) {
            setDToken(data.token)
            localStorage.setItem('dToken', data.token)
        } else {
            toast.error(data.message)
        }

    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg bg-slate-600'>
                <p className='text-2xl font-bold m-auto text-blue-700'><span className='text-white'>Service Provider</span> Login</p>
                <div className='w-full '>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full '>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
                    Login
                </button>


            </div>
        </form>
    )
}

export default Login