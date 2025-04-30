import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex justify-start items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={100}>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quae.</p>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quae.</p>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quae.</p>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quae.</p>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quae.</p>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quae.</p>
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quae.</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;