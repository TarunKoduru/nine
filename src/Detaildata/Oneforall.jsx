import React from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Footer from '../Header/Footer';
import '../App.css';

const Oneforall = ({ videoSrc, title, description, price, specifications, galleryData }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 1000,
        arrows: false,
    };

    return (
        <div>
            <div className='orfull'>
                <div className='video-background'>
                    <video autoPlay muted loop preload="none">
                        <source src={videoSrc} type="video/webm" />
                    </video>
                    <div className='Tiname'>
                        <div className='pe'>
                            <h1>{title}</h1>
                        </div>
                        <div className='pe'>
                            <h3>{description}</h3>
                        </div>
                    </div>
                    <div className='vidprice'>
                        <div className='price'>
                            <div className='cost'>
                                <h2>{price}</h2>
                                <h5>After Est. Savings</h5>
                            </div>
                            <div>
                                <Link to="/ordered" className='hover-link' state={{ carName: title }}>Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='orderright'>
                    <div className='bottomleft'>
                        <div className='table'>
                            <h1>KEY SPECIFICATIONS</h1>
                            <table>
                                <tbody>
                                    {specifications.map((spec, index) => (
                                        <tr key={index}>
                                            <td>{spec.label}</td>
                                            <td>{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div >
                        <div className='Titimg'>
                            <div className='pic-slider'>
                                <h1 style={{ textAlign: 'center', margin: '10px 0', borderBottom: '2px solid #fff', borderRadius: '10px' }}>GALLERY</h1>
                                <Slider {...settings}>
                                    {galleryData.map((item, index) => (
                                        <div key={index}>
                                            <img src={item.image} className='gallerydata' alt='images' loading='lazy' />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Oneforall;
