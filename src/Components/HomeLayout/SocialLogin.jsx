import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-3'>Login with</h1>
            <div className='space-y-3'>
                <button className='btn btn-secondary btn-outline w-full'>LogIn with Google</button>
                <button className='btn btn-primary btn-outline w-full'>LogIn with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;