import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../account/Account.css';
import HeaderAccount from '../../header/headerAccount';
import FooterAccount from '../../footer/footer';
import { useLoading } from '../../loading/LoadingProvider';
import { toast } from 'react-toastify';
import { AccountApi } from '../../../api/account/accountApi';

const ForgotPassword = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    const headerText = type === 'forgot' ? "reset_password" : "unlock_account";
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { showLoading, hideLoading } = useLoading();


    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (!emailValue) {
            setError(t("please_enter_email"));
        } else if (!emailPattern.test(emailValue)) {
            setError(t("invalid_email"));
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError(t("please_enter_information"));
            return;
        }

        try {
            showLoading();
            if (type === 'forgot') {
                AccountApi.forgot_password(email)
                    .then(() => {
                        toast.success(t('check_mail'));
                        navigate('/login');
                        hideLoading();
                    })
                    .catch((error) => {
                        hideLoading();
                        if (error?.response?.status === 400) {
                            toast.error(t('email_required'));
                        } else {
                            toast.error(t('system_error'));
                        }
                    });
            } else {
                AccountApi.unlock_account(email)
                    .then(() => {
                        navigate('/verify');
                        hideLoading();
                    })
                    .catch((error) => {
                        hideLoading();
                        if (error?.response?.status === 400) {
                            toast.error(t('email_required'));
                        } else {
                            toast.error(t('system_error'));
                        }
                    });
            }
        } catch (error) {
            hideLoading();
            toast.error(t('system_error'));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <HeaderAccount text={headerText} />
            <div className='d-flex justify-content-center forgot-password-main'>
                <div className='d-flex forgot-password-data'>
                    <div className='cursor-pointer' style={{ width: "10%" }}>
                        <FontAwesomeIcon icon={faArrowLeft} color='#ff7e2b' onClick={() => navigate('/login')} />
                    </div>
                    <div style={{ width: "80%" }}>
                        <div className='d-flex justify-content-center'>
                            <h1 style={{ fontSize: '22px', fontWeight: '400' }}>{t(headerText)}</h1>
                        </div>
                        <input
                            type='email'
                            className='form-control mt-4'
                            placeholder={t("email")}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {error && <div className="text-danger fs-custom">{error}</div>}
                        <button type='submit' className='btn btn-primary w-100 mt-4 p-2'>{t(headerText)}</button>
                    </div>
                </div>
            </div>
            <FooterAccount />
        </form>
    );
};

export default ForgotPassword;
