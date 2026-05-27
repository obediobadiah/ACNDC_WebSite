import React, { useState } from 'react'
import '../styles/style.css'
import { Link } from "react-router-dom"
import Act_Img1 from '../assets/Logos ACNDC.png'
import Swal from 'sweetalert2'
import { CircularProgress } from "@mui/material";
import API_BASE_URL from '../../../../config/api'



function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const onButtonClick = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const loginData = {
            username: username,
            password: password,
        };

        fetch(`${API_BASE_URL}/auth-users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
            .then((response) => {
                // Check if the response is successful
                if (!response.ok) {
                    // For non-2xx responses, try to parse the error message from JSON
                    return response.json().then(data => {
                        // Re-throw with the server's specific message so the catch block can match it
                        throw new Error(data.message || `HTTP ${response.status}: Authentication failed`);
                    }, () => {
                        // Second argument to .then() handles JSON parse errors only
                        throw new Error(`HTTP ${response.status}: Authentication failed`);
                    });
                }
                return response.json();
            })
            .then((data) => {
                if (data.message === "Success") {
                    console.log(data);
                    window.localStorage.setItem("Token", data.token);
                    verifyTokenAndRedirect(data.token);
                    Swal.fire('Reussi', `Bienvenue`, 'success')
                } else {
                    // Fallback for unexpected responses
                    Swal.fire('Echec', 'Une erreur est survenue', 'error')
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error during login: ', error);
                // Check the error message and show appropriate user message
                const errorMessage = error.message;
                if (errorMessage.includes('Invalid password')) {
                    Swal.fire('Echec', 'Votre Mot de Passe est incorrect', 'error');
                } else if (errorMessage.includes('User not found')) {
                    Swal.fire('Echec', `Ce compte n'existe pas`, 'error');
                } else if (errorMessage.includes('Username and password are required')) {
                    Swal.fire('Echec', 'Le nom d\'utilisateur et le mot de passe sont requis', 'error');
                } else {
                    Swal.fire('Echec', 'Une erreur est survenue lors de la connexion. Veuillez réessayer.', 'error');
                }
                setIsLoading(false);
            });
    }

    const verifyTokenAndRedirect = (token) => {
        const storedToken = window.localStorage.getItem("Token");

        if (storedToken === token) {
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
                                        <button type="submit" className='submit_button my-4'>
                                            <span>Log in</span>
                                            {isLoading && (
                                                <CircularProgress sx={{ color: "white" }} thickness={5} size={22} className='circular_bar mx-2' />
                                            )}
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
