import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/');
    }, 2000);
    const location = useLocation();
    const { title, message } = location.state || {};

    return (
        <div className="thank-you-container">
            <h1>{title || 'Thank You!'}</h1>
            <p>{message || 'We appreciate your message!'}</p>
        </div>
    );
};

export default ThankYou;
