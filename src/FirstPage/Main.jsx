import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Images } from '../Pics/Images';
import Subdata from './Subdata';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../Header/Footer';

const Main = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        messg: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/thank-you', {
            state: {
                title: 'Thank You for Contacting Us!',
                message: 'We will get back to you shortly.'
            }
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
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

    const [data] = useState([
        { name: "BUGATTI", title: "TOURBILLION", price: "From 32 Crore", btn: "Order", link: "/conf/tourbillion", imgurl: Images.tb1, btnwhite: "blue" },
        { name: "INDIAN", title: "SCOUT BOBBER", price: "From 16 Lakh", btn: "Order", link: "/conf1/bobber", imgurl: Images.indian, btnwhite: "green" },
        { name: "FASHION", title: "AN ENDURING SYMBOL OF STYLE", btn: "Explore", link: "/fashion", imgurl: Images.fashion, btnwhite: "silver" },
        { name: "ROLLS-ROYCE", title: "BOAT TAIL", price: "From 200 Crore", btn: "Order", link: "/conf1/boatail", imgurl: Images.boat4, btnwhite: "blue" },
        { name: "DUCATI", title: "PANIGALE V4", price: "From 24 Lakh", btn: "Order", link: "/conf1/panigalev4", imgurl: Images.pv4, btnwhite: "yellow" },
    ]);

    return (
        <div>
            <div className='mainp'>
                <div>
                    <div className='container1'>
                        <img src={Images.mainpic} alt='bentley-mulliner-batur-x-ducati-diavel' className="item-image" loading='lazy' />
                        <div className='container-title'>
                            <h1>We are your one-stop shop</h1>
                            <h1>for complete auto care</h1>
                            <h1>for every make and model of vehicle.</h1>
                        </div>
                    </div>
                </div>
                <div className='about-container'>
                    <div className='aboutname'>
                        <h1>About NiNe</h1>
                    </div><br />
                    <div className='sub-about'>
                        <div>
                            <img src={Images.aboutpic} alt='AboutImg' className='aboutImg' loading='lazy' />
                        </div>
                        <div>
                            <h2>Our Story</h2>
                            <p>At Nine, we are passionate about providing high-quality products to our customers. </p>
                            <p> Our story began when we realized that there was a gap in the market for affordable and sustainable products.</p>
                            <p>  We set out to create a business that would provide just that.</p>
                        </div>
                    </div>

                </div>
                <div className='slider-container'>
                    <div className='image-slider'>
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    <Subdata
                                        imgurl={item.imgurl}
                                        btnwhite={item.btnwhite}
                                        name={item.name}
                                        title={item.title}
                                        price={item.price}
                                        butn={item.btn}
                                        link={item.link}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className='contact-container'>
                    <div className='contact'>
                        <div className='conttit'>
                            <h1>Contact Us</h1><br />
                            <p> +91 9177813103</p>
                            <p>tarunkoduru9@gmail.com</p>
                            <p>Guntur, Andhra Pradesh</p>
                            <p>India</p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className='cntform'>
                                <div>
                                    <div>
                                        <input type="text"
                                            placeholder='NAME'
                                            value={formData.name}
                                            onChange={handleChange}
                                            id="name"
                                            required
                                            autoComplete='off' />
                                    </div>
                                    <div>
                                        <input type="email"
                                            placeholder='EMAIL'
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            autoComplete='off' />
                                    </div>
                                    <div>
                                        <input type="text"
                                            placeholder='MESSAGE'
                                            id="messg"
                                            value={formData.messg}
                                            onChange={handleChange}
                                            required
                                            autoComplete='off' />
                                    </div><br />
                                    <div className='cont-btn'>
                                        <button className='hover-link ' type='submit'>Send</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
}

export default Main;
