import React, { useState } from 'react'
import '../styles/style.css'
import { Link } from "react-router-dom"
import Act_Img1 from '../assets/Logos ACNDC.png'
import login_vector from '../assets/undraw_projections_re_ulc6.svg'
import Swal from 'sweetalert2'



function Login() {

    const [data, setData] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onButtonClick = (e) => {
        e.preventDefault();

        const data = {
            username: username,
            password: password,
        };

        fetch('https://acndc-backend.vercel.app/api/auth-users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message == "Success") {
                    console.log(data);
                    window.localStorage.setItem("Token", data.token);
                    verifyTokenAndRedirect(data.token);
                    Swal.fire('Reussi', `Bienvenue`, 'success')
                }
                else if (data.message == "Invalid password") {
                    Swal.fire('Echec', 'Votre Mot de Passe est incorrect', 'error')
                }
                else if (data.message == "The user doesn't exist") {
                    Swal.fire('Echec', `Ce compte n'existe pas`, 'error')
                }
            })
            .catch((error) => console.error('Error getting data: ', error));
    }

    const verifyTokenAndRedirect = (token) => {
        const storedToken = window.localStorage.getItem("Token");

        if (storedToken == token) {
            window.location.href = "/admin-dashboard";
        } else {
            console.log("Unauthorized access");
        }
    }

    return (

        <div className="login_container">
            <div className="login_contents">
                <div className="login_detatils row">
                    <div className="login_Intro .d-sm-none col vh-100">
                    <div className="login_container_detail">
                            <div className="login_img">
                                <Link onClick={() => { window.location.href = "/" }} className="login_logo">
                                    <img src={Act_Img1} alt="login" />
                                </Link>
                            </div>
                        </div>
                        <h2>Ensemble pour la justice du genre et la justice climatique.</h2>
                        <h3>La justice du genre, l’Egalite de sexe, la justice économique et la justice climatique notre travail auprès de la communauté.</h3>
                        {/* <img src={login_vector} alt="login" /> */}
                    </div>
                    <div className="login_contents_container col vh-100">
                    <h1>LOGIN</h1>

                        <div className="login_from_container">
                            <form action="submit" onSubmit={onButtonClick}>
                                <div className={"input_container"}>
                                    <div className="inputContainerDetails">
                                        <input
                                            value={username}
                                            placeholder="Enter your email here"
                                            onChange={(e) => setUsername(e.target.value)}
                                            className={"input_box my-4"} required />
                                        <input
                                            type='password'
                                            value={password}
                                            placeholder="Enter your password here"
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={"input_box my-4"} required />
                                        <button
                                            type="submit" className='submit_button my-4'>
                                            <span>Log in</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="login_color_bottom">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
