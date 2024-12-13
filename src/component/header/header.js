import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../multilingual/LanguageSelector';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { faCartArrowDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const token = "1"; // Thay đổi giá trị để kiểm tra giao diện

    const handleClickLogin = () => {
        navigate('/login');
    };

    const handleClickRegister = () => {
        navigate('/register');
    };

    return (
        <header>
            <div style={{ backgroundColor: "#fe6433" }} className="d-flex justify-content-center">
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
            <div style={{ backgroundColor: "#fe6433" }} className="d-flex justify-content-center">
                <div className="d-flex w-60 pt-2 pb-2">
                    <div style={{ width: "20%" }} className="d-flex align-items-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"  style={{ height: "60px" }} alt="ups" />
                    </div>

                    <div style={{ width: "65%" }} className="d-flex align-items-center">
                        test
                    </div>

                    <div style={{ width: "10%" }} className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faCartShopping} style={{ height: "30px" }}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
