import React, { useState } from 'react';
import { Images } from '../Pics/Images';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`A password reset link has been sent to ${email}`);
        setEmail('');
    };

    return (
        <div className='signinfull'>
            <div>
                <img className='logotitle1' src={Images.logo} alt='logo' loading='lazy' />
            </div>
            <div className="forgot-password-container">
                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <h1>Forgot Password</h1>
                    <div className="input-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='hover-link'>Submit</button>
                    {message && <p className="success-message">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
