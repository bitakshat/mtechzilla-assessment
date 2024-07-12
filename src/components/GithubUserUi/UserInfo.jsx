import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from '../../images/background-image.jpg'

const UserInfo = () => {
    const location = useLocation();
    const inputData = location.state?.fetchedData || null;
    const navigate = useNavigate();
    const handleLogout = async () => {
        navigate('/');
    }

    if (!inputData) return null

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-10" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="text-4xl text-white underline">Github User UI</h1>
            <div className="w-1/4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-white rounded-2xl">
                <div className="shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 border-2 border-gray-500 p-1 rounded-full mx-auto" src={inputData.avatar_url} alt="John Doe" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-white font-medium leading-8">{inputData.name}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>Web Developer</p>
                        </div>
                        <table className="text-base my-3 text-white">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 font-semibold">Username</td>
                                    <td className="px-2 py-2">{inputData.login}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 font-semibold">No. of public Repositories</td>
                                    <td className="px-2 py-2">{inputData.public_repos}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 font-semibold">No. of public Gists</td>
                                    <td className="px-2 py-2">{inputData.public_gists}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 font-semibold">Profile created at</td>
                                    <td className="px-2 py-2">{inputData.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 ml-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleLogout}>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;