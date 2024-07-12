import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import backgroundImage from '../../images/background-image.jpg'

const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            navigate('/pomodorotimer');
            console.log(user);
        } catch (error) {
            console.log("error: ", error.message)
            setErrorMessage(error.message)
        }
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden w-1/2 ">
                <div className="w-full p-6 m-auto bg-white text-white shadow-md lg:max-w-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl">
                    <h1 className="text-3xl font-semibold text-center underline">Your Pomodoro Timer</h1>
                    <h1 className="text-xl font-semibold text-center m-5">
                        Sign in
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-black"
                                onChange={(event) => setLoginEmail(event.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 text-black"
                                onChange={(event) => setLoginPassword(event.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-1/4 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-blue-600"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                        <h1 className="text-center text-red-400">{errorMessage}</h1>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login