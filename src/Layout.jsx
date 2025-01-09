import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
    {/* Here we are including Header and Footer then we will load other things dynamically for which we get 
        Outlet from react-router-dom 
        so Header and Footer will be same and we can make changes in places wherever we have Outlet */}

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

// REMEMBER THAT ALWAYS USE OUTLET WHEN DOING NESTING IN PATH  

{/* Now there is a perticular syntax to use this Layout
    we can not just directly use Layout  by exporting *
    Now go to main.jsx */}

export default Layout 