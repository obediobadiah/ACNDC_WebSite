import React, { useState, useEffect } from "react";
import Navbar from './navbar'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { CircularProgress } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




function AddActivity({ Toggle }) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [reactQuillvalue, setReactQuillvalue] = useState('');

    const [title, setActTitle] = useState('');
    const [description, setActDescription] = useState('');
    // const [link, setActLink] = useState('');
    const [image, setActImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fileSizeError, setFileSizeError] = useState('');



    const { id } = useParams();

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']
        ]
    };

    const InsertData = (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        Swal.fire({
            title: 'Etes-vous sûr?',
            text: 'Cet actualité sera ajoutée dans la liste!',
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
                // formData.append('link', link);
                formData.append('image', image);
                formData.append('content', reactQuillvalue);
    
                fetch('https://acndc-backend.vercel.app/api/add-actuality/', {
                    method: 'POST',
                    body: formData,
                })
                    .then((res) => {
                        const contentType = res.headers.get('content-type');
                        if (contentType && contentType.includes('application/json')) {
                            return res.json();
                        } else {
                            return res.text();
                        }
                    })                    
                    .then((data) => {
                        console.log(data)
                        Swal.fire('Success', 'Actualité ajoutée avec succès', 'success').then(() => {
                            window.location.reload();
                        });
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        console.error('Echec: ', error);
                        Swal.fire('Error', 'Echec d\'ajout de données', 'error');
                        setIsLoading(false);
                    });
            }
            setIsLoading(false);
        });
    };
    

    // const InsertQuillData = (actuality_id) => {
    //     fetch('https://acndc-backend.vercel.app/api/add-quill-content/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ actuality_id: actuality_id, content: value })  // Send actuality_id and Quill content
    //     })
    //     .then((res) => res.json())
    //     .then((response) => {
    //         Swal.fire('Success', 'Blog Content Ajouté avec succès', 'success');
    //     })
    //     .catch((error) => {
    //         console.error('Error adding Quill content: ', error);
    //         Swal.fire('Error', 'Failed to add Quill content', 'error');
    //     });
    // };


    // Function to insert general activity data
    // const InsertData = () => {
    //     const formData = new FormData();
    //     formData.append('title', title);
    //     formData.append('description', description);
    //     formData.append('link', link);
    //     formData.append('image', image);

    //     return fetch('https://acndc-backend.vercel.app/api/add-actuality/', {
    //         method: 'POST',
    //         body: formData,
    //     });
    // };

    // // Function to insert Quill content in a separate table
    // const InsertQuillData = (actuality_id) => {
    //     return fetch('https://acndc-backend.vercel.app/api/add-actuality-content/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ actuality_id, reactQuillvalue }),
    //     });
    // };



    // const fetchDataByID = () => {
    //     fetch('https://acndc-backend.vercel.app/api/get-actuality-id/' + id)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setFilteredData(data);
    //             setActTitle(data[0].title)
    //             // setActLink(data[0].link)
    //             // setActDescription(data[0].description)
    //             // setActImage(data[0].image)

    //             if (data.length > 0) {
    //                 setActTitle(data[0].title || '');
    //                 setActLink(data[0].link || '');
    //                 setActDescription(data[0].description || '');
    //                 setActImage(data[0].image || '');
    //             }

    //         })
    //         .catch((error) => console.error('Error getting data: ', error));
    // };



    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // useEffect(() => {
    //     fetchDataByID();
    // }, []);

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

    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);

    //     Swal.fire({
    //         title: 'Etes-vous sûr?',
    //         text: 'Cet actualité sera ajouter dans la liste!',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#d33',
    //         cancelButtonColor: '#3085d6',
    //         confirmButtonText: 'OUI, Ajoutez!',
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // Perform both requests at the same time using Promise.all
    //             Promise.all([ InsertQuillData()])
    //                 .then(() => {
    //                     Swal.fire('Success', 'Actualité et Blog Ajouté avec succès', 'success').then(() => {
    //                         window.location.reload();
    //                     });
    //                 })
    //                 .catch((error) => {
    //                     console.error('Echec: ', error);
    //                     Swal.fire('Error', 'Echec d\'ajout de données', 'error');
    //                 })
    //                 .finally(() => {
    //                     setIsLoading(false);
    //                 });
    //         }
    //     });
    // };


    return (
        <div className="px-3">
            <Navbar Toggle={Toggle} />

            <div className="actuality_list_table border bg-white p-3 m-4 rounded-3">
                <div className="add_actuality_header">
                    <span className="fw-bold text-secondary fs-1">Ajoutez des Actualites</span>
                </div>

                <form onSubmit={InsertData}>
                    <div className="add_actuality_header_form">
                        <div className="row">
                            <input type="text" className="col m-2 rounded-3 p-2 border-1 fw-bold" placeholder="Ecrivez le titre de l'actualite" value={title} onChange={(e) => setActTitle(e.target.value)}  />
                            <input type="file" className="col m-2 rounded p-2" onChange={handleFileChange}  />
                            {fileSizeError && <div className="text-danger">{fileSizeError}</div>}
                        </div>
                        {/* <div className="row">
                            <input type="text" className="col m-2 rounded-3 p-2 border-1 fw-bold" placeholder="Ecrivez le lien de l'actualite" value={link} onChange={(e) => setActLink(e.target.value)}  />
                        </div> */}
                        <div className="row">
                            <textarea type="text" className="col m-2 rounded-3 p-3 fw-bold" placeholder="Ecrivez la description de l'actualite" value={description} onChange={(e) => setActDescription(e.target.value)}  />
                        </div>


                        <div className="my-4">
                            <p className="fw-bold text-secondary">Ecrivez Votre Blog</p>
                            <ReactQuill
                                theme="snow"
                                value={reactQuillvalue}
                                onChange={setReactQuillvalue}
                                modules={modules}
                            />
                        </div>

                    </div>
                    <div className="">
                        <Link to={`/admin-dashboard/actuality/`} className="m-2 bg-danger border-0 px-6 fw-bold text-white rounded-1 p-2 text-white" variant="secondary" onClick={handleClose}>
                            <span aria-hidden="true" className="m-2">&times;</span>Annuler
                        </Link>
                        <button type="submit" className="m-2 bg-success border-0 px-6 fw-bold text-white rounded-1 p-2 text-white" variant="primary">
                            <i className="bi bi-save2-fill m-2"></i>Enregistrer
                            {isLoading && (
                                <CircularProgress sx={{ color: "white" }} thickness={5} size={22} className='circular_bar mx-2' />
                            )}
                        </button>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default AddActivity