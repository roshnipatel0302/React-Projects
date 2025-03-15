import React from 'react'
import {Container, Logo, Logout} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
 

const Header = () => {
    const authStatus = useSelector((state)=>state.auth.authStatus)
return (
    <div className='bg-orange-500'>Header</div>
)
}

export default Header