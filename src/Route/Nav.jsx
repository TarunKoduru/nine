import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { Images } from '../Pics/Images';

const Nav = ({ setUsername, username }) => {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const location = useLocation();
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/forgot-password";

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleSignOut = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setDropdownVisible(false);
  };

  return (
    <div className="ap-cont">
      <nav
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="nav-head">
          <div className="nav-box">
            <Link to={'/'} className="logo">
              <img src={Images.logo} alt="NiNe" />
            </Link>
          </div>

          {!isAuthPage && (
            <>
              <div className="nav-box">
                <div className="nav-sub">
                  <Link to="/autoo/cars">Cars</Link>
                  <Link to="/autoo/bikes">Bikes</Link>
                  <Link to="/fashion">Fashion</Link>
                  <Link to="/about">About</Link>
                </div>
              </div>
              <div className="icon-box">
                {username ? (
                  <>
                    <div onClick={() => setDropdownVisible(!dropdownVisible)} className="account-icon">
                      {username}
                    </div>
                    {dropdownVisible && (
                      <div className="dropdown-menu">
                        <Link onClick={handleSignOut}>Sign Out</Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to="/signin" style={{ color: "#fff" }} className="signin-btn">Login</Link>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
