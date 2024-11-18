import React, { useState, useEffect } from 'react';
import Footer from '../Header/Footer';
import Button from '../ThirdPage/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

const Automobiles = ({ title, Aname, description, data, image, head, aboutpic, cbclass, des1, des2, des3 }) => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Thanks for joining us! Look out for our latest news and exclusive updates soon.`);
        setEmail('');

        setTimeout(() => {
            setMessage('');
        }, 2000);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div>
                <div>
                    <div className="onetitcb">
                        <img srcSet={image} alt='Image' className="one-image" loading='lazy' />
                        <div className={`onetitecb ${cbclass}`}>
                            <h1>{title}</h1>
                            <h1>{description}</h1>
                        </div>
                    </div>
                    <div className='about-container'>
                        <div className='aboutname'>
                            <h1>{Aname}</h1>
                        </div><br />
                        <div className='sub-about'>
                            <div>
                                <img src={aboutpic} alt='AboutImg' className='aboutImg' loading='lazy' />
                            </div>
                            <div>
                                <h2>{head}</h2>
                                <p>{des1}</p>
                                <p>{des2}</p>
                                <p>{des3}</p>
                            </div>
                        </div>

                    </div>
                </div><br />
                <div className='slider-container'>
                    <div className='image-slider'>
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    <Button
                                        name={item.name}
                                        price={"Configure Your Own"}
                                        bunt={item.bunt}
                                        butn={item.butn}
                                        link={item.link}
                                        image={item.image}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div><br />
                <div className='lastviews'>
                    <h2>SUBSCRIBE BY EMAIL</h2>
                    <p>Register to receive email updates on the latest collections, models, services and events from NiNe</p>
                    <form onSubmit={handleSubmit} className='lastviewsform' >
                        <div>
                            <input type='email'
                                id="email"
                                name="email"
                                value={email}
                                autoComplete='off'
                                required
                                placeholder='Email Address'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div><br />
                        <button type="submit" className='hover-link'>SUBSCRIBE</button>
                        {message && <p className="success-message">{message}</p>}
                    </form>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Automobiles;
