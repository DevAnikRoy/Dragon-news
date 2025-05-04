import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-3'>Login with</h1>
            <div className='space-y-3'>
                <button className='btn btn-secondary btn-outline w-full'> <FcGoogle size={24} /> LogIn with Google</button>
                <button className='btn btn-primary btn-outline w-full'> <FaGithub size={24} /> LogIn with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;