import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useProducts } from './ProductsContext';
import Footer from '../Header/Footer';

const ProductOrder = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const products = useProducts();
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    const [mainImage, setMainImage] = useState('/images/default.jpg');

    useEffect(() => {
        if (product && product.imageUrl && product.imageUrl.length > 0) {
            setMainImage(product.imageUrl[0]);
        }
    }, [product]);

    if (!product) {
        return <p>Product not found</p>;
    }

    const changeImage = (imageUrl) => {
        setMainImage(imageUrl);
    };

    return (
        <div>
            <div className='full-productview'>
                <div className="product-oorder">
                    <div className="image-gallery">
                        <img src={mainImage} alt={product.name} className="main-image" />
                        <div className="thumbnails">
                            {product.imageUrl.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => changeImage(image)}
                                    className={`thumbnail ${mainImage === image ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="product-iinfo">
                        <h2 className="product-nname" style={{ textAlign: "center.." }}>{product.name}</h2>
                        <p className="product-ddescription">{product.description}</p>

                        <div className="product-sspecs">
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Gender:</strong> {product.gender}</p>

                            <div className="size-ddropdown">
                                <label htmlFor="sizes"><strong>Sizes:</strong></label>
                                <select id="sizes">
                                    {product.sizes?.map((size, index) => (
                                        <option key={index} value={size}>
                                            {size}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <p className="product-price">{product.price}</p>
                        </div>
                        <div className='otherdata'>
                            <details>
                                <summary>Description</summary>
                                <p>{product.description}</p>
                            </details><br />
                            <details>
                                <summary>Details</summary>
                                <p>{product.details}</p>
                            </details><br />
                            <details>
                                <summary>Materials</summary>
                                <p>{product.materials}</p>
                            </details><br />
                        </div>
                        <div className='shopbagbtn'>
                            <Link to="/order" className="hover-link" >ADD TO CART</Link>
                        </div>
                    </div>
                </div>
                <div className='showdata'>
                    <div className='lastview'>
                        <h2>SUBSCRIBE BY EMAIL</h2>
                        <p>Register to receive email updates on the latest collections, items, services and events from NiNe</p>
                        <input type='email' placeholder='Email Address'></input>
                        <Link to="#" className="hover-link" >SUBSCRIBE</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductOrder;
