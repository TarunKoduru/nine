import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Images } from '../Pics/Images';

const SignInForm = ({ setUsername }) => {
    const [username, setFormUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);
        setUsername(username);
        navigate('/');
    };

    return (
        <div className='signinfull'>
            <div>
                <img className='logotitle' src={Images.logo} alt='logo' loading='lazy' />
            </div>
            <div>
                <form onSubmit={handleSubmit} className="signin-form">
                    <h1 style={{ color: '#fff' }}>SIGN IN TO NiNe</h1>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="USERNAME"
                            id='username'
                            value={username}
                            maxLength={5}
                            onChange={(e) => setFormUsername(e.target.value)}
                            autoComplete='off'
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="PASSWORD"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="show-password">
                            <input
                                type="checkbox"
                                id="show-password"
                                checked={showPassword}
                                autoComplete='off'
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <label htmlFor="show-password">Show password</label>
                        </div>
                    </div>

                    <div className="forgot-password">
                        <Link style={{ color: "#fff" }} to="/forgot-password"  >Forgot Password</Link>
                    </div>

                    <button type="submit" className="hover-link">Sign In</button>

                    <div className="create-account">
                        <p style={{ color: '#fff' }}>Don't have an account? <Link to="/signup" style={{ color: "#fff" }} className="signup-btn">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>

    );
};
export default SignInForm;

