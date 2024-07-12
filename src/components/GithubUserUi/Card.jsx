import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../images/background-image.jpg'


const Card = () => {
    const [userName, setUserName] = useState('');
    const [userDetails, setUserDetails] = useState('');

    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };

    const handleButtonClick = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}`);
            setUserDetails(response.data);
            navigate('/userinfo', { state: { fetchedData: response.data } })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-full max-w-xs bg-transparent">
                <form className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 text-center">
                    <h1 classNameName="m-5">Github User UI</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Enter github user name to get account details
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                            value={userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-6">
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleButtonClick}>
                            View Details
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Card;