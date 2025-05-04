import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex justify-start items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={100}>
                <p className='font-bold'>India-Pak tensions flare: Missile test, trade bans, and ceasefire violations | The latest.........</p>
                <br />
                <p className='font-bold'>IMF's Indian executive director fired with immediate effect, says government.......</p>
                <br />
                <p className='font-bold'>Russia's Lavrov calls for India-Pak dialogue in talks with Jaishankar.......</p>
                <br />
                <p className='font-bold'>Owaisi slams Yunus' aide for remarks on northeast: ‘You owe…’.......</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;