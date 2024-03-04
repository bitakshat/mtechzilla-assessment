import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const AppCard = ({ title, description, path, icon }) => {

    // page navigation 
    let navigate = useNavigate();
    const routeChange = () => {
        console.log("current path: ", path);
        navigate(`/${path}`);
    }

    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex justify-center items-center flex-col gap-5 h-full overflow-hidden rounded-xl shadow-2xl"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.15), transparent 40%)`,
                }}
            />

            {/* app routing goes here  */}
            <div className='text-4xl'>{icon}</div>
            <h1 className='text-3xl'>{title}</h1>
            <p className='text-center'>{description}</p>
            <button className='bg-transparent w-3/4 hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-gray-200 hover:border-transparent rounded' onClick={routeChange}>Visit</button>
        </div>
    );
}

export default AppCard;