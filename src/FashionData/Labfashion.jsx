import React, { useState, useMemo } from 'react';
import Footer from '../Header/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Labfashion = ({ products, fname }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBrandCategories, setSelectedBrandCategories] = useState([]);
    const [selectedApparelCategories, setSelectedApparelCategories] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    const allBrandCategories = ['Ducati', 'Royal Enfield', 'Indian', 'Harley-Davidson'];
    const allApparelCategories = ['Jackets', 'T-Shirts', 'Helmets', 'Gloves', 'Shoes'];
    const genderOptions = ['Male', 'Female', 'Unisex'];

    const handleBrandCategoryChange = (category) => {
        setSelectedBrandCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((cat) => cat !== category)
                : [...prevSelected, category]
        );
    };

    const handleApparelCategoryChange = (category) => {
        setSelectedApparelCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((cat) => cat !== category)
                : [...prevSelected, category]
        );
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedBrandCategories([]);
        setSelectedApparelCategories([]);
        setSortOrder('');
        setSelectedGender('');
    };

    const filteredProducts = useMemo(() => {
        return products
            .filter((product) => {
                const matchesBrandCategory = !selectedBrandCategories.length || selectedBrandCategories.includes(product.brand);
                const matchesApparelCategory = !selectedApparelCategories.length || selectedApparelCategories.includes(product.category);
                const matchesGender = !selectedGender || product.gender === selectedGender;
                const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase())
                    || product.category.toLowerCase().includes(searchTerm.toLowerCase())
                    || product.brand.toLowerCase().includes(searchTerm.toLowerCase());

                return matchesBrandCategory && matchesApparelCategory && matchesGender && matchesSearchTerm;
            })
            .sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/₹|,/g, ''));
                const priceB = parseFloat(b.price.replace(/₹|,/g, ''));
                return sortOrder === 'low-to-high' ? priceA - priceB : sortOrder === 'high-to-low' ? priceB - priceA : 0;
            });
    }, [products, searchTerm, selectedBrandCategories, selectedApparelCategories, sortOrder, selectedGender]);

    return (
        <div>
            <div className='products-view'>
                <div className='product-view1'>
                    <div className='filterx'>
                        <h2 style={{ color: "#151515" }}>Filter</h2>
                        <FontAwesomeIcon icon={faX} className='iconx' onClick={clearFilters} />
                    </div>
                    <details>
                        <summary>Brands</summary>
                        <div className='brand-filters'>
                            {allBrandCategories.map((brand, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        id={brand}
                                        value={brand}
                                        onChange={() => handleBrandCategoryChange(brand)}
                                        checked={selectedBrandCategories.includes(brand)}
                                    />
                                    <label htmlFor={brand}>{brand}</label>
                                </div>
                            ))}
                        </div><br />
                    </details>
                    <details>
                        <summary>Apparel</summary>
                        <div className='apparel-filters'>
                            {allApparelCategories.map((category, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        id={category}
                                        value={category}
                                        onChange={() => handleApparelCategoryChange(category)}
                                        checked={selectedApparelCategories.includes(category)}
                                    />
                                    <label htmlFor={category}>{category}</label>
                                </div>
                            ))}
                        </div><br />
                    </details>
                    <details>
                        <summary>Gender</summary>
                        <div className='gender-filter'>
                            {genderOptions.map((gender, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        id={gender}
                                        name="gender"
                                        value={gender}
                                        onChange={() => setSelectedGender(gender)}
                                        checked={selectedGender === gender}
                                    />
                                    <label htmlFor={gender}>{gender}</label>
                                </div>
                            ))}
                            <div>
                                <input
                                    type="radio"
                                    id="all"
                                    name="gender"
                                    value=""
                                    onChange={() => setSelectedGender('')}
                                    checked={selectedGender === ''}
                                />
                                <label htmlFor="all">All</label>
                            </div>
                        </div>
                    </details>
                    <div className='price-filter'>
                        <label htmlFor="sortOrder">Sort by Price: </label>
                        <select
                            id="sortOrder"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="">From</option>
                            <option value="low-to-high">Min to Max</option>
                            <option value="high-to-low">Max to Min</option>
                        </select>
                    </div>
                </div>

                <div className='products-full'>
                    <div className='products-half'>
                        <h1>APPAREL</h1>
                    </div>
                    <div className='product-search'>
                        <h3 style={{ color: "#16203b", fontWeight: "600" }}>SEARCH</h3>
                        <input
                            type='search'
                            placeholder='SEARCH BY NAME, BRAND OR CATEGORY'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="products-grid">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <Link to={`/product/${product.id}`} key={product.id} className="product-card">
                                    <img src={product.imageUrl} alt={product.name} className="product-image" loading='lazy' />
                                    <div className="product-info">
                                        <p className="product-category">{product.category}</p>
                                        <p className="product-brand">{product.brand}</p>
                                        <h2 className="product-name">{product.name}</h2>
                                        <p className="product-price">{product.price}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Labfashion;
