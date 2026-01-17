import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
 
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
              <span onClick={() => navigate('/')} className='w-150 sm:w-100 cursor-pointer text-xl bg-blue-600 px-3 py-1 rounded' >Service</span>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>Providers</p>
      </div>
      <button onClick={() => logout()} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar