import React from 'react';
import Logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='w-[400px]' src={Logo} alt="Logo" />
            <h1 className='text-accent'>Journalism Without Fear or Favour</h1>
            <p className='text-accent font-semibold'>{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
        </div>
    );
};

export default Header;