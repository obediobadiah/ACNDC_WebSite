import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/style.css'
import logoImg from '../assets/Logos ACNDC.png'


function sidebar({ handleComponentChange }) {
    return (
        <div className="bg-white sidebar py-3 vh-100 w-100">
            <div className="admin-logo">

                <a href="/">
                    <div className="admin-header-logo">
                        <img src={logoImg} alt="Site logo" className="admin-logoimg" />
                        <span className="brand-name fs-5">ACNDC Asbl</span>
                    </div>
                </a>

            </div>
            <hr className="text-dark" />
            <div className="side-menu">

                <Link to="/admin-dashboard/" className="list-group-item list-group-item-action p-3">
                    <i className="bi bi-house fs-5 me-3"></i>
                    <span className="fs-6">Home</span>
                </Link>

                <Link to="/admin-dashboard/donations" className="list-group-item list-group-item-action p-3">
                    <i className="fas fa-hand-holding-heart fs-5 me-3"></i>
                    <span className="fs-6">Donations</span>
                </Link>

                <Link to="/admin-dashboard/newsletter" className="list-group-item list-group-item-action p-3">
                    <i className="fas fa-envelope fs-5 me-3"></i>
                    <span className="fs-6">Newsletter</span>
                </Link>
                <Link to="/admin-dashboard/activity" className="list-group-item list-group-item-action p-3">
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span className="fs-6">Activity</span>
                </Link>
                {/* <a href={'/admin-dashboard/report'} className="list-group-item list-group-item-action p-3">
                    <i className="bi bi-clipboard-data fs-5 me-3"></i>
                    <span className="fs-6">Report</span>
                </a> */}

            </div>
        </div>

    )
}

export default sidebar