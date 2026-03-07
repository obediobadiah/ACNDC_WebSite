import React, { useState, useEffect, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/style.css'
import API_BASE_URL from '../../../../config/api'
import Navbar from './navbar'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


function Activity({ Toggle }) {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const duplicateAct = (dipId) => {
        Swal.fire({
            title: 'Etes-vous sure?',
            text: 'Cet actualité sera dupliquer!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OUI, Dupliquez cet Actualité!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${API_BASE_URL}/add-actuality-id/${dipId}`, { method: 'POST' })
                    .then((response) => {
                        if (response.ok) {
                            Swal.fire('Dupliqué!', 'Actualité Dupliqué', 'success')
                                .then(() => {
                                    window.location.reload();
                                });
                        } else {
                            Swal.fire('Error', 'Echec de duplication', 'error');
                        }
                    })
                    .catch((error) => {
                        console.error('Echec ', error);
                        Swal.fire('Error', 'Echec', 'error');
                    });
            }
        });
    }

    // Fetch all data

    const fetchData = () => {
        fetch(`${API_BASE_URL}/get-actuality/`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error('Error getting data: ', error));
    };

    // Filter data

    const filterData = useCallback(() => {
        const encodedSearchTerm = encodeURIComponent(searchTerm);
        fetch(`${API_BASE_URL}/get-actuality/` + encodedSearchTerm)
            .then((response) => response.json())
            .then((filteredData) => {
                // setFilteredData(filteredData);
            })
            .catch((error) => console.error('Error filtering data: ', error));
    }, [searchTerm]);

    const deleteAct = (delId) => {
        Swal.fire({
            title: 'Etes-vous sure?',
            text: 'Vous ne pouvez plus restaurer cet actualité!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OUI, Effacé cet Actualité!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${API_BASE_URL}/delete-actuality/${delId}`, { method: 'POST' })
                    .then((response) => {
                        if (response.ok) {
                            Swal.fire('Effacé!', 'Actualité effacé', 'success')
                                .then(() => {
                                    window.location.reload();
                                });
                        } else {
                            Swal.fire('Error', 'Echec de suppretion', 'error');
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting data:', error);
                        Swal.fire('Error', 'Failed to delete item.', 'error');
                    });
            }
        });
    };

    useEffect(() => {
        filterData();
    }, [searchTerm, filterData]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };


    return (
        <div className="px-3">
            <Navbar Toggle={Toggle} />


            <div className="caontiner-fluid d-flex justify-content-start">
                <div className="activities_buttons">
                    {/* <button onClick={handleShowAddForm} >
                        <i className="bi bi-plus fs-5"></i>AJOUTER
                    </button> */}
                    <Link to={`/admin-dashboard/add-actuality/`} className="bg-primary border-0 px-5 py-1 fw-bold text-white rounded-3 m-2 text-white" >
                        AJOUTER
                    </Link>
                </div>
                <div className="activities_search">
                    <input type="text" class="p-2 m-2 rounded-5 border-1 border-top-0" placeholder="Recherche" aria-label="Search" aria-describedby="basic-addon1" value={searchTerm} onChange={handleSearch} />
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
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item) => (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td><span>{item.title}</span></td>
                                <td>{item.description}</td>
                                <td className="">{item.link}</td>
                                <td>
                                    <img src={`data:image/jpeg;base64,${item.image}`} alt="Actuality" width="150" height="150" />
                                </td>
                                <td>
                                    <Link to={`/admin-dashboard/update-actuality/${item.id}`} className="bg-warning border-0 px-5 fw-bold text-white rounded m-1" >
                                        <i className="bi bi-pencil fs-7"></i>
                                    </Link>
                                    <button className="bg-success border-0 px-5 fw-bold text-white rounded m-1" onClick={() => { duplicateAct(item.id) }}>
                                        <i className="bi bi-copy fs-7 fw-bold"></i>
                                    </button>
                                    <button className="bg-danger border-0 px-5 fw-bold text-white rounded m-1" onClick={() => { deleteAct(item.id) }}>
                                        <i className="bi bi-trash fs-7"></i>
                                    </button>
                                </td>
                            </tr>
                        )).reverse()}

                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default Activity