import React, { useState, useEffect } from "react";
import Navbar from './navbar'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { CircularProgress } from "@mui/material";


function Activity({ Toggle }) {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [show, setShow] = useState(false);
    const handleCloseAddForm = () => setShow(false);
    const handleShowAddForm = () => setShow(true);
    const [isLoading, setIsLoading] = useState(false);

    // const handleCloseEditForm = () => setShow(false);
    // const handleShowEditForm = () => setShow(true);

    const [title, setActTitle] = useState('');
    const [description, setActDescription] = useState('');
    const [link, setActLink] = useState('');
    const [image, setActImage] = useState(null);
    const [fileSizeError, setFileSizeError] = useState('');



    // Insert data

    // const InsertData = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('title', title);
    //     formData.append('description', description);
    //     formData.append('link', link);
    //     formData.append('image', image);

    //     fetch('https://acndc-backend.vercel.app/api/add-actuality/', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then((res) => { console.log(res) })
    //         .catch((error) => { console.log(error) })
    // }

    // // Insert data

    const InsertData = (e) => {
        e.preventDefault();
        setIsLoading(true);

        Swal.fire({
            title: 'Etes-vous sûr?',
            text: 'Cet actualité sera ajouter dans la liste!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OUI, Ajoutez!',
        }).then((result) => {
            if (result.isConfirmed) {
                const formData = new FormData();
                formData.append('title', title);
                formData.append('description', description);
                formData.append('link', link);
                formData.append('image', image);

                fetch('https://acndc-backend.vercel.app/api/add-actuality/', {
                    method: 'POST',
                    body: formData,
                })
                    .then((res) => {
                        Swal.fire('Success', 'Actualité Ajouté avec succès', 'success').then(() => {
                            window.location.reload();
                        });;
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        console.error('Echec ', error);
                        Swal.fire('Error', 'Echec', 'error');
                        setIsLoading(false);
                    });
            }
            setIsLoading(false);
        });

    };

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
                fetch(`https://acndc-backend.vercel.app/api/add-actuality-id/${dipId}`, { method: 'POST' })
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
        fetch('https://acndc-backend.vercel.app/api/get-actuality/')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
            })
            .catch((error) => console.error('Error getting data: ', error));
    };

    // Filter data

    const filterData = () => {
        const encodedSearchTerm = encodeURIComponent(searchTerm);
        fetch('https://acndc-backend.vercel.app/api/get-actuality/' + encodedSearchTerm)
            .then((response) => response.json())
            .then((filteredData) => {
                setFilteredData(filteredData);
            })
            .catch((error) => console.error('Error filtering data: ', error));
    };

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
                fetch(`https://acndc-backend.vercel.app/api/delete-actuality/${delId}`, { method: 'POST' })
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
    }, [searchTerm]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 4 * 1024 * 1024) { // 4MB in bytes
            setFileSizeError("L'image choisi doit avoir moins de 4M");
            setActImage(null);
            return;
        }
        setFileSizeError('');
        setActImage(file);
    };


    return (
        <div className="px-3">
            <Navbar Toggle={Toggle} />

            <Modal show={show} onHide={handleCloseAddForm} backdrop="static" keyboard={false} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" centered>
                <Modal.Header closebutton>
                    <Modal.Title>Ajoutez des Actualites</Modal.Title>
                </Modal.Header>
                <div className="actuality_list_table border bg-white p-3 m-4 rounded-3">
                    <div className="add_actuality_header">
                        <span className="fw-bold text-secondary fs-1">ACTUALITES</span>
                    </div>
                    <form onSubmit={InsertData}>
                        <div className="add_actuality_header_form">
                            <div className="row">
                                <input type="text" className="col m-2 rounded-3 p-2 border-1 fw-bold" placeholder="Ecrivez le titre de l'actualite" value={title} onChange={(e) => setActTitle(e.target.value)} required />
                                {/* <input type="file" className="col m-2 rounded p-2" onChange={(e) => setActImage(e.target.files[0])} required /> */}
                                <input type="file" className="col m-2 rounded p-2" onChange={handleFileChange} required />
                                {fileSizeError && <div className="text-danger">{fileSizeError}</div>}
                            </div>
                            <div className="row">
                                <input type="text" className="col m-2 rounded-3 p-2 border-1 fw-bold" placeholder="Ecrivez le lien de l'actualite" value={link} onChange={(e) => setActLink(e.target.value)} required />
                            </div>
                            <div className="row">
                                <textarea type="text" className="col m-2 rounded-3 p-3 fw-bold" placeholder="Ecrivez la description de l'actualite" value={description} onChange={(e) => setActDescription(e.target.value)} required />
                            </div>
                        </div>
                        <Modal.Footer>
                            <div className="">
                                <button className="m-2 bg-danger border-0 px-6 fw-bold text-white rounded-1 p-2 text-white" variant="secondary" onClick={handleCloseAddForm}>
                                    <span aria-hidden="true" className="m-2">&times;</span>Annuler
                                </button>
                                <button type="submit" className="m-2 bg-success border-0 px-6 fw-bold text-white rounded-1 p-2 text-white" variant="primary">
                                    <i className="bi bi-save2-fill m-2"></i>Enregistrer
                                    {isLoading && (
                                        <CircularProgress sx={{ color: "white" }} thickness={5} size={22} className='circular_bar mx-2' />
                                    )}
                                </button>
                            </div>

                        </Modal.Footer>
                    </form>

                </div>

            </Modal>

            <div className="caontiner-fluid d-flex justify-content-start">
                <div className="activities_buttons">
                    <button onClick={handleShowAddForm} className="bg-primary border-0 px-5 py-1 fw-bold text-white rounded-3 m-2 text-white">
                        <i className="bi bi-plus fs-5"></i>AJOUTER
                    </button>
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
                                    <img src={`data:image/jpeg;base64,${item.image}`} alt="Actuality Image" width="150" height="150" />
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