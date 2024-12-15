import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../../account/Account.css';
import HeaderAccount from '../../header/headerAccount';
import FooterAccount from '../../footer/footer';

const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [formState, setFormState] = useState({
        emailOrUsername: '',
        password: '',
        errors: {
            emailOrUsername: '',
            password: '',
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const errors = { ...formState.errors };

        if (name === 'emailOrUsername' && !value) {
            errors.emailOrUsername = t('please_enter_username_or_email');
        } else if (name === 'password' && !value) {
            errors.password = t('please_enter_password');
        } else {
            errors[name] = '';
        }

        setFormState({
            ...formState,
            [name]: value,
            errors,
        });
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        const { emailOrUsername, password, errors } = formState;
        let valid = true;

        if (!emailOrUsername) {
            errors.emailOrUsername = t('please_enter_username_or_email');
            valid = false;
        }
        if (!password) {
            errors.password = t('please_enter_password');
            valid = false;
        }

        setFormState({ ...formState, errors });

        if (!valid) return;

        console.log({ emailOrUsername, password });
    };

    const handleClickForgotPassword = () => {
        navigate('/reset?type=forgot');
    };

    const handleClickUnlockAccount = () => {
        navigate('/reset?type=unlock');
    };

    const handleClickRegister = () => {
        navigate('/register');
    };

    return (
        <form onSubmit={handelSubmit}>
            <HeaderAccount text={"login"} />
            <div className='d-flex justify-content-center' style={{ background: '#ff7e2b' }}>
                <div className='d-flex w-50 align-items-center'>
                    <div className='w-50 background-image'></div>
                    <div className='d-flex justify-content-end w-50'>
                        <div className='form-login'>
                            <div className='p-4'>
                                <h1 style={{ fontSize: '22px', fontWeight: '400' }}>{t("login")}</h1>

                                <div className="mt-4">
                                    <input
                                        type='text'
                                        name="emailOrUsername"
                                        className='form-control'
                                        placeholder={t("email")}
                                        onChange={handleChange}
                                    />
                                    {formState.errors.emailOrUsername && (
                                        <div className="text-danger" style={{ fontSize: '12px' }}>{formState.errors.emailOrUsername}</div>
                                    )}
                                </div>

                                <div className='position-relative mt-4'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        className='form-control'
                                        placeholder={t("password")}
                                        onChange={handleChange}
                                    />
                                    <span
                                        className="position-absolute top-50 end-0 translate-middle-y me-3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                    {formState.errors.password && (
                                        <div className="text-danger" style={{ fontSize: '12px' }}>{formState.errors.password}</div>
                                    )}
                                </div>

                                <button type='submit' className='btn btn-primary w-100 mt-4 p-2'>{t("login")}</button>
                                <div className='d-flex w-100 pt-2'>
                                    <div className='w-50 forgot-password' onClick={handleClickForgotPassword}>{t("forgot_password")}</div>
                                    <div className='w-50 d-flex justify-content-end forgot-password' onClick={handleClickUnlockAccount}>{t("unlock_account")}</div>
                                </div>

                                <div className="separator">
                                    <span>{t("or")}</span>
                                </div>

                                <div className='d-flex w-100 pt-2 justify-content-center gap-1'>
                                    <div className='new-to-shopee'>{t("new_to_shopee")}</div>
                                    <div className='register' onClick={handleClickRegister}>{t("register")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAccount />
        </form>
    );
};

export default Login;
