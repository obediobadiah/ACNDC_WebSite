import React from "react";
import 'bootstrap/js/dist/dropdown'
import { Outlet, Navigate } from "react-router-dom";


const navbar = ({Toggle}) => {

    const handleLogout = () => {
        localStorage.removeItem('Token')
        window.location.reload()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-power fs-5 me-3 f-bold"></i>
                            </a>
                            <ul className="dropdown-menu m-0" aria-labelledby="navbarDropdown">
                                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar