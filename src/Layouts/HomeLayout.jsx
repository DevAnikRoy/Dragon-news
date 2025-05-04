import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAsside from '../Components/HomeLayout/LeftAsside';
import RightAsside from '../Components/HomeLayout/RightAsside';

const HomeLayout = () => {
    return (
        <div className='mt-10'>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-8'>
                
                {/* left nav */}
                <aside className='col-span-3 left_nav sticky h-fit top-4'>
                    <LeftAsside></LeftAsside>
                </aside>
                
                {/* main section */}
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                
                {/* right nav */}
                <aside className='col-span-3 right_nav sticky h-fit top-4'>
                    <RightAsside></RightAsside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;