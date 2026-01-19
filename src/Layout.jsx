import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function Layout(){

    return (
        <>
        <Navbar/>
        <main style={{ paddingTop: '5.5rem' }}>
            <Outlet/>
        </main>
        <Footer/>
        </>

    )
}

export default Layout