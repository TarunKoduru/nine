import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Subdata = ({ imgurl, color, btnwhite, name, title, price, butn, link }) => {
    return (
        <div className="container1">
            <img srcSet={imgurl} alt={`${name} ${title}`} className="item-image" loading='lazy' />
            <div className='title'>
                <div className='sub-title1'>
                    <h1 className={color}>{name}</h1>
                    <h2 className={color}>{title}</h2>
                    <h3 className={color}>{price}</h3>
                </div>
                <div className='sub-title1'>
                    <div className='btnd1'>
                        <Link to={link} className={btnwhite}>{butn}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subdata;
