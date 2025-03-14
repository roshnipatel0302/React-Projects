import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams();
  return (
    <div className='text-center bg-orange-500 text-white font-2xl p-4'>
        User :{id}
        </div>
  )
}

export default User