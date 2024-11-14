import React from 'react';
import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ image, name, price, butn, link, bunt }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 2000);
    };

    return (
        <div>
            <div className="container1">
                <img srcSet={image} alt={`${name} `} className="item-image" loading='lazy' />
                <div className='title1'>
                    <div className='sub-title1'>
                        <div className='ju'>
                            <h1 className="white">{name}</h1>
                            <h3 className="white">{price}</h3>
                        </div>
                    </div>
                    <div className='sub-title1'>
                        <div className='bt'>
                            <div className={`btg ${isAnimating ? 'animate-border' : ''}`}>
                                <Link to={link} className='link-style' onMouseEnter={handleClick}>
                                    {bunt}
                                </Link>
                            </div>
                            <div>
                                <Link to={link} style={{ textDecoration: "underline", textTransform: "uppercase", fontSize: "15px" }} className='link-style' onMouseEnter={handleClick}>
                                    {butn}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Button;