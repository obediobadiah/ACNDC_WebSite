import React from "react";
import Sidebar from './components/sidebar'
import HomeSide from './components/HomeSide'
import Activity from './components/Activity'
import Report from './components/Report'
import AddActivity from './components/AddActivity'
import UpdateActivity from './components/UpdateActivity'
import Donations from './components/Donations'
import Newsletter from "./components/Newsletter";
import './styles/style.css'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'


function Dashboard() {
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="bg-light min-vh-100">
            <div className="row">
                {toggle && <div className="col-4 col-md-2 bg-white shadow vh-100 position-fixed">
                    <Sidebar />
                </div>}
                {toggle && <div className="col-4 col-md-2"></div>}
                <div className="col vh-100">
                    <Routes>
                        <Route path="/" element={<HomeSide Toggle={Toggle} />} />
                        <Route path="/donations" element={<Donations Toggle={Toggle} />} />
                        <Route path="/newsletter" element={<Newsletter Toggle={Toggle} />} />
                        <Route path="/activity" element={<Activity Toggle={Toggle} />} />
                        <Route path="/add-actuality/" element={<AddActivity Toggle={Toggle} />} />
                        <Route path="/report" element={<Report Toggle={Toggle} />} />
                        <Route path="/update-actuality/:id" element={<UpdateActivity Toggle={Toggle} />} />
                    </Routes>
                </div>

            </div>

        </div>
    )
}

export default Dashboard