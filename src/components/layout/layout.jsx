import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Layout