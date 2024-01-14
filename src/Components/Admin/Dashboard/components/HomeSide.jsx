import React, { useState, useEffect } from "react";
import Navbar from './navbar'
import '../styles/style.css'

function HomeSide({ Toggle }) {

    const [countData, setCountData] = useState([]);
    const [data, setData] = useState([]);

    // Fetch all data
    const fetchCount = () => {
        fetch('https://acndc-backend.vercel.app/api/get-actuality-count/')
            .then((response) => response.json())
            .then((countData) => {
                setCountData(countData);
            })
            .catch((error) => console.error('Error getting data: ', error));
    };

    useEffect(() => {
        fetchCount();
    }, []);

    // Fetch all data
    const fetchData = () => {
        fetch('https://acndc-backend.vercel.app/api/get-actuality/')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error('Error getting data: ', error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="px-3">
            <Navbar Toggle={Toggle} />
            <div className="container-fluid">
                <div className="row g-3 my-2">
                    <div className="col-md-6">
                        <div className="p-3 border d-flex justify-content-around align-items-center rounded-3 bg-primary text-white">
                            <div>
                                {countData.map((item) => (
                                    <h3 className="fs-1 fw-bold text-white">{item.count}</h3>
                                ))}
                                <h3 className="fs-5 text-white fw-bold">Activites</h3>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 bg-secondary border d-flex justify-content-around align-items-center rounded-3 text-white">
                            <div>
                                <h3 className="fs-1 fw-bold text-white">10</h3>
                                <h3 className="fs-5 text-white fw-bold">Raports</h3>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="actuality_list_table border bg-white p-3 m-4 rounded-4">
                <span className="fw-bold text-secondary">Liste des Actualite</span>
                <table class="table table-striped table-hover table-bordered fw-light">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Link</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(-4).map((item) => (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td><span>{item.title}</span></td>
                                <td>{item.description}</td>
                                <td className="">{item.link}</td>
                                <td className=""><img src={`data:image/jpeg;base64,${item.image}`}alt="Actuality Image" width="150" height="150"/></td>
                            </tr>
                        )).reverse()}
                    </tbody>
                </table>
                <div className="voir_plus_button">
                            <a href="/admin-dashboard/actuality" className="dash_voir_plus">
                                <span className="fs-8 me-3">Voir Plus →</span>
                            </a>
                        </div>
            </div>
            <div className="actuality_list_table border rounded-3 bg-white p-3 m-4">
                <span className="fw-bold text-secondary">Liste des Rapports</span>
                <table class="table fw-bold">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
                <div className="voir_plus_button">
                    <a href="/admin-dashboard/report" className="dash_voir_plus">
                        <span className="fs-8 me-3">Voir Plus →</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeSide