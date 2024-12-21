import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../multilingual/LanguageSelector';
import './header.css';
import Popup from '../popup/popup';
import { useLoading } from '../loading/LoadingProvider';

const Header = ({ onSearch }) => {
    const { showLoading, hideLoading } = useLoading();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const token = "";
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = () => {
        onSearch(searchText);
    };

    const handleClickLogin = () => {
        showLoading();
        setTimeout(() => {
            navigate('/login');
            hideLoading();
        }, 300);
    };

    const handleClickRegister = () => {
        showLoading();
        setTimeout(() => {
            navigate('/register');
            hideLoading();
        }, 300);
    };

    const handleStateHome = () => {
        showLoading();
        setTimeout(() => {
            navigate('/');
            hideLoading();
        }, 500);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handelNavigateCart = () => {
        navigate('/cart');
    };

    return (
        <header style={{ background: 'linear-gradient(-180deg,#f53d2d,#f63)' }}>
            <div className="d-flex justify-content-center">
                <div className="d-flex w-60 pt-2 pb-2">
                    <div className="d-flex w-50 align-items-center gap-2">
                        {t("connect_us")} <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="d-flex w-50 justify-content-end">
                        <LanguageSelector />
                        {token ? (
                            <div className="d-flex gap-2" style={{ marginLeft: "20px" }}>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                    className="img-login" alt="ups" />  VietNQ
                            </div>
                        ) : (
                            <div className="d-flex mr-2">
                                <div className="register_header" onClick={handleClickRegister}>
                                    {t("register")}
                                </div>
                                <div className="login_header" onClick={handleClickLogin}>
                                    {t("login")}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex w-60 pt-2 pb-2">
                    <div style={{ width: "10%" }} className="d-flex align-items-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{ height: "60px", cursor: 'pointer' }}
                            alt="ups" onClick={handleStateHome} />
                    </div>

                    <div style={{ width: "75%" }} className="d-flex align-items-center">
                        <div className="search-container">
                            <input
                                type="text"
                                className="search-input"
                                placeholder={t("text_search")}
                                value={searchText}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                            />
                            <button className="search-button" onClick={handleSearch}>
                                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            </button>
                        </div>
                    </div>

                    <div style={{ width: "10%" }} className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faCartShopping} style={{ height: "30px" }} onClick={handelNavigateCart}
                            onMouseEnter={() => setShowPopup(true)}
                            onMouseLeave={() => setShowPopup(false)} />
                        {showPopup && <Popup />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
