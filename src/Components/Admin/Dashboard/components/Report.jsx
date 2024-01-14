import React from "react";
import Navbar from './navbar'

function Report({ Toggle }) {
    return (
        <div className="px-3">
            <Navbar Toggle={Toggle} />
            <div className="actuality_list_table">
                <div className="row">
                    <div className="col border bg-white p-3 m-4 rounded-4">
                        <div className="caontiner-fluid">
                            <div className="activities_search">
                                <input type="text" class="p-2 my-4 rounded-2 border-1 border-top-0" placeholder="Recherche" aria-label="Search" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <span className="fw-bold text-secondary">Liste des Rapport Annuels</span>
                        <table class="table fw-light table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><span>Mark</span></td>
                                    <td>Otto</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
                                    <td>
                                        <button className="bg-warning border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-pencil fs-7"></i>
                                        </button>
                                        <button className="bg-success border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-copy fs-7 fw-bold"></i>
                                        </button>
                                        <button className="bg-danger border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-trash fs-7"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><span>Mark</span></td>
                                    <td>Otto</td>
                                    <td>@Meto</td>
                                    <td>
                                        <button className="bg-warning border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-pencil fs-7"></i>
                                        </button>
                                        <button className="bg-success border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-copy fs-7 fw-bold"></i>
                                        </button>
                                        <button className="bg-danger border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-trash fs-7"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><span>Mark</span></td>
                                    <td>Otto</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
                                    <td>
                                        <button className="bg-warning border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-pencil fs-7"></i>
                                        </button>
                                        <button className="bg-success border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-copy fs-7 fw-bold"></i>
                                        </button>
                                        <button className="bg-danger border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-trash fs-7"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><span>Mark</span></td>
                                    <td>Otto</td>
                                    <td>@Meto</td>
                                    <td>
                                        <button className="bg-warning border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-pencil fs-7"></i>
                                        </button>
                                        <button className="bg-success border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-copy fs-7 fw-bold"></i>
                                        </button>
                                        <button className="bg-danger border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-trash fs-7"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><span>Mark</span></td>
                                    <td>Otto</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
                                    <td>
                                        <button className="bg-warning border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-pencil fs-7"></i>
                                        </button>
                                        <button className="bg-success border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-copy fs-7 fw-bold"></i>
                                        </button>
                                        <button className="bg-danger border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-trash fs-7"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><span>Mark</span></td>
                                    <td>Otto</td>
                                    <td>@Meto</td>
                                    <td>
                                        <button className="bg-warning border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-pencil fs-7"></i>
                                        </button>
                                        <button className="bg-success border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-copy fs-7 fw-bold"></i>
                                        </button>
                                        <button className="bg-danger border-0 px-4 fw-bold text-white rounded m-1">
                                            <i className="bi bi-trash fs-7"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col border bg-white p-3 m-4 rounded-3">
                        <div className="add_actuality_header">
                            <span>RAPORTS</span><br />
                            <span className="fw-bold text-secondary fs-1">Ajoutez des Rapports</span>
                        </div>
                        <div className="add_actuality_header_form">
                            <div className="row">
                                <input type="text" className="col m-2 rounded-3 p-3 fw-bold" placeholder="Ecrivez le titre du rapport" required />
                                <input type="file" className="fw-bold col m-2 rounded p-2" required />
                            </div>
                            <div className="row">
                                <textarea type="text" className="col m-2 rounded-3 p-4 fw-bold" placeholder="Ecrivez la description du rapport" required />
                            </div>

                            <div className="activities_buttons">
                                <a href="#" className="bg-primary border-0 px-2 fw-bold text-white rounded-3 mt-3 text-white">
                                    <i className="bi bi-save fs-5 m-2"></i>AJOUTER
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Report