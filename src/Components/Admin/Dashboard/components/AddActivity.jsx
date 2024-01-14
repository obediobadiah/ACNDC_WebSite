import React, { useState, useEffect } from "react";
import Navbar from './navbar'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

function AddActivity({ Toggle }) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setActTitle] = useState('');
    const [description, setActDescription] = useState('');
    const [link, setActLink] = useState('');
    const [image, setActImage] = useState(null);

    const { id } = useParams();

    // const UpdateData = (e) => {

    //     const formData = new FormData();
    //     // const id = req.params.id
    //     formData.append('title', title);
    //     formData.append('description', description);
    //     formData.append('link', link);
    //     formData.append('image', image);

    //     fetch('https://acndc-backend.vercel.app/api/update-actuality/' + id, {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then((res) => {console.log(res)})
    //         .catch((error) => {
    //             console.error('Echec ', error);
    //             Swal.fire('Error', 'Echec', 'error');
    //         });

    // };


    const UpdateData = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Etes-vous sûr?',
            text: 'Cet actualité sera Modifiéé!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'OUI, Modifiez!',
        }).then((result) => {
            if (result.isConfirmed) {
                const formData = new FormData();
                formData.append('title', title);
                formData.append('description', description);
                formData.append('link', link);
                formData.append('image', image);

                fetch('https://acndc-backend.vercel.app/api/update-actuality/' + id, {
                    method: 'POST',
                    body: formData,
                })
                    .then((res) => {
                        Swal.fire('Success', 'Actualité Modifiéé avec succès', 'success').then(() => {
                            // window.location.reload();
                        });;
                    })
                    .catch((error) => {
                        console.error('Echec ', error);
                        Swal.fire('Error', 'Echec', 'error');
                    });
            }
        });

    };

    // Fetch all data
    // const fetchDataByID = () => {
    //     fetch('https://acndc-backend.vercel.app/api/get-actuality/19', {method:'GET'})
    //         .then((response) => console.log(response.json()))
    //         .then((data) => {
    //             console.log("Fetched Data:", data);
    //             setData(data);
    //         })
    //         .catch((error) => console.error('Error getting data: ', error));
    // };

    const fetchDataByID = () => {
        fetch('https://acndc-backend.vercel.app/api/get-actuality-id/' + id)
            .then((response) => response.json())
            .then((data) => {
                setFilteredData(data);
                setActTitle(data[0].title)
                // setActLink(data[0].link)
                // setActDescription(data[0].description)
                // setActImage(data[0].image)

                if (data.length > 0) {
                setActTitle(data[0].title || '');
                setActLink(data[0].link || '');
                setActDescription(data[0].description || '');
                setActImage(data[0].image || '');
            }

            })
            .catch((error) => console.error('Error getting data: ', error));
    };



    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        fetchDataByID();
    }, []);


    return (
        <div className="px-3">
            <Navbar Toggle={Toggle} />

            <div className="actuality_list_table border bg-white p-3 m-4 rounded-3">
                <div className="add_actuality_header">
                    <span className="fw-bold text-secondary fs-1">ACTUALITES</span>
                </div>

                <form>
                    <div className="add_actuality_header_form">
                        <div className="row">
                            <input type="text" className="col m-2 rounded-3 p-2 border-1 fw-bold" placeholder="Ecrivez le titre de l'actualite" value={title} onChange={(e) => setActTitle(e.target.value)} required />
                            <input type="file" className="col m-2 rounded p-2" onChange={(e) => setActImage(e.target.files[0])} required />
                        </div>
                        <div className="row">
                            <input type="text" className="col m-2 rounded-3 p-2 border-1 fw-bold" placeholder="Ecrivez le lien de l'actualite" value={link} onChange={(e) => setActLink(e.target.value)} required />
                        </div>
                        <div className="row">
                            <textarea type="text" className="col m-2 rounded-3 p-3 fw-bold" placeholder="Ecrivez la description de l'actualite" value={description} onChange={(e) => setActDescription(e.target.value)} required />
                        </div>
                    </div>

                    <div className="">
                        <Link to={`/admin-dashboard/actuality/`} className="m-2 bg-danger border-0 px-6 fw-bold text-white rounded-1 p-2 text-white" variant="secondary" onClick={handleClose}>
                            <span aria-hidden="true" className="m-2">&times;</span>Annuler
                        </Link>
                        <button onClick={UpdateData} className="m-2 bg-success border-0 px-6 fw-bold text-white rounded-1 p-2 text-white" variant="primary">
                            <i className="bi bi-save2-fill m-2"></i>Enregistrer
                        </button>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default AddActivity