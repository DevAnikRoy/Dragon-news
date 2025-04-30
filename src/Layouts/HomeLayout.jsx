import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                
                {/* left nav */}
                <section className='left_nav'>

                </section>
                
                {/* main section */}
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                
                {/* right nav */}
                <section className='right_nav'>

                </section>
            </main>
        </div>
    );
};

export default HomeLayout;