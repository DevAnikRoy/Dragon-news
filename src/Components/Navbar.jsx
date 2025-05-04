import React from 'react';
import { NavLink } from 'react-router';
import User from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='nav flex gap-10 text-accent font-semibold'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className=' flex gap-5'>
                <img className='bg-none' src={User} alt="" />
                <a href="/auth/login">
                    <button className='btn btn-primary px-10'>LogIn</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;