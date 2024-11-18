import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Header/Footer';
import Button from './Button';

const ModelView = ({ title1, title2, title3, description, data, d1, d2, d3 }) => {
    const [selectedModel, setSelectedModel] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedModel(null);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setSelectedModel(0);
        }
    }, [isMobile]);

    const handleImageClick = (index) => {
        setSelectedModel(index);
    };

    return (
        <div>
            <div className='viewdatafull'>
                <div className='subviewtitle'>
                    <div className='modeltitles'>
                        <h3>{title1}</h3>
                        <h1>{title2}</h1>
                        <h1>{title3}</h1>
                        <h2>{description}</h2>
                    </div>
                </div>
                <div className={`model-view-container ${selectedModel !== null ? 'expanded-view' : ''}`}>
                    <div className='left-preview'>
                        {data.map((item, index) => (
                            <div key={index} className='model-preview'>
                                {isMobile ? (
                                    <Link to={item.link} className="preview-link" onClick={() => handleImageClick(index)}>
                                        <img src={item.image} alt={item.name} className="car-thumbnail" loading='lazy' />
                                        <p>{item.name}</p>
                                    </Link>
                                ) : (
                                    <div onClick={() => handleImageClick(index)}>
                                        <img src={item.image} alt={item.name} className="car-thumbnail" loading='lazy' />
                                        <p>{item.name}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {!isMobile && selectedModel !== null && (
                        <div className='full-view show'>
                            <div className='viewtitles'>
                                <Button
                                    name={data[selectedModel].name}
                                    price={"Build Your Own"}
                                    bunt={data[selectedModel].bunt}
                                    butn={data[selectedModel].butn}
                                    link={data[selectedModel].link}
                                    image={data[selectedModel].image}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className='about-carbrand'>
                    <div className='aboutname'>
                        <h1>About {title3}</h1>
                    </div><br />
                    <div className='acb'>
                        <p style={{ fontSize: "20px" }}>{d1}</p>
                        <p style={{ fontSize: "20px" }}>{d2} </p>
                        <p style={{ fontSize: "20px" }}>{d3}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ModelView;
