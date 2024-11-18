import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use HashRouter here
import { ProductsProvider } from '../FashionData/ProductsContext';
import Nav from '../Route/Nav';
import About from '../SecondPage/About';
import Fashion from '../SecondPage/Fashion';
import Main from '../FirstPage/Main';
import Configure from '../Detaildata/Configure';
import Ordered from '../Header/Ordered';
import Configure1 from '../Detaildata/Configure1';
import ModelsObject from '../ThirdPage/ModelsObject';
import Autobjects from '../SecondPage/Autobjects';
import ProductOrder from '../FashionData/ProductOrder';
import Labfashion from '../FashionData/Labfashion';
import ProductOrdered from '../Header/ProductOrdered';
import ThankYou from '../FirstPage/ThankYou';
import SignUpForm from '../Header/SignUpForm';
import ForgotPassword from '../Header/ForgotPassword';
import SignInForm from '../Header/SignInForm';

const Home = () => {
  const [username, setUsername] = useState(localStorage.getItem("username") || null);

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  }, [username]);

  return (
    <ProductsProvider>
      <Router
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}>
        <Nav setUsername={setUsername} username={username} />
        <div className="content">
          <Routes>
            <Route index element={<Main />} />
            <Route path="/autoo/:model3" element={<Autobjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/conf/:model" element={<Configure />} />
            <Route path="/conf1/:model1" element={<Configure1 />} />
            <Route path="/order" element={<ProductOrdered />} />
            <Route path="/ordered" element={<Ordered />} />
            <Route path="/place/:model2" element={<ModelsObject />} />
            <Route path="/product/:id" element={<ProductOrder />} />
            <Route path="/labfashion" element={<Labfashion />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signin" element={<SignInForm setUsername={setUsername} />} />
            <Route path="/nine" element={<Navigate to="/" />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </ProductsProvider>
  );
};

export default Home;
