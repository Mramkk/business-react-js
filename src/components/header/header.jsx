import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <nav className="navbar navbar-expand-lg bg-dark-subtle">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'data'}>Business Data</Link>
                        </li>


                    </ul>
                    <ul className="d-flex navbar-nav ">
                        <li className="nav-item">

                            <Link className="nav-link" to={"/logout"}>Logout</Link>


                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header