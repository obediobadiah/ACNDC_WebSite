import React from "react";
import Sidebar from './components/sidebar'
import HomeSide from './components/HomeSide'
import Activity from './components/Activity'
import Report from './components/Report'
import AddActivity from './components/AddActivity'
import './styles/style.css'
import { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'


function Dashboard() {

    const [activeComponent, setActiveComponent] = useState("HomeSide");

    const handleComponentChange = (componentName, id = null) => {
        setActiveComponent(componentName);
    }
    const [toggle, setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="bg-light min-vh-100">
            <div className="row">
                {toggle && <div className="col-4 col-md-2 bg-white shadow vh-100 position-fixed">
                    <Sidebar handleComponentChange={handleComponentChange} />
                </div>}
                {toggle && <div className="col-4 col-md-2"></div>}
                <div className="col vh-100">
                        <Routes>
                            <Route path="/" element={<HomeSide Toggle={Toggle}/>} />
                            <Route path="/actuality/" element={<Activity Toggle={Toggle}/>} />
                            <Route path="/report" element={<Report Toggle={Toggle}/>} />
                            <Route path="/update-actuality/:id" element={<AddActivity Toggle={Toggle}/>} />
                        </Routes>
                </div>

            </div>

        </div>
    )
}

export default Dashboard