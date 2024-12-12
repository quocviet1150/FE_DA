import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../../account/account.css';
import HeaderAccount from '../../header/headerAccount';
import LanguageSwitcher from '../../multilingual/LanguageSwitcher';

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    const handleClickForgotPassword = () => {
        navigate('/forgot-password?type=reset');
    };

    const handleClickUnlockAccount = () => {
        navigate('/forgot-password?type=unlock');
    };

    return (
        <form onSubmit={handelSubmit} >
            <HeaderAccount text={"login"} />
            <div className='d-flex justify-content-center' style={{ background: '#ff7e2b' }}>
                <div className='d-flex w-50 align-items-center'>
                    <div className='w-50 background-image'></div>
                    <div className='d-flex justify-content-end w-50'>
                        <div className='form-login'>
                            <div className='p-4'>
                                <h1 style={{ fontSize: '22px', fontWeight: '400' }}>{t("login")}</h1>

                                <input type='text' className='form-control mt-4' placeholder={t("email")} />

                                <div className='position-relative mt-4'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className='form-control'
                                        placeholder={t("password")}
                                    />
                                    <span
                                        className="position-absolute top-50 end-0 translate-middle-y me-3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                </div>

                                <button type='submit' className='btn btn-primary w-100 mt-4 p-2'>{t("login")}</button>
                                <div className='d-flex w-100 pt-2'>
                                    <div className='w-50 forgot-password' onClick={handleClickForgotPassword}>{t("forgot_password")}</div>
                                    <div className='w-50 d-flex justify-content-end forgot-password'  onClick={handleClickUnlockAccount} >{t("unlock_account")}</div>
                                </div>

                                <div className="separator">
                                    <span>{t("or")}</span>
                                </div>

                                <div className='d-flex w-100 pt-2 justify-content-center gap-1'>
                                    <div className='new-to-shopee'>{t("new_to_shopee")}</div>
                                    <div className='register'>{t("register")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LanguageSwitcher />
            </div>
        </form>
    );
};

export default Login;
