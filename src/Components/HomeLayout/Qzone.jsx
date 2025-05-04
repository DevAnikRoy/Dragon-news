import React from 'react';
import SwimingImage from '../../assets/swimming.png'
import ClassImage from '../../assets/class.png'
import PlayImage from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div>
                <img src={SwimingImage} alt="" />
                <img src={ClassImage} alt="" />
                <img src={PlayImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;