import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../account/account.css';
import HeaderAccount from '../../header/headerAccount';

const ForgotPassword = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    const headerText = type === 'reset' ? "reset_password" : "unlock_account";

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <form onSubmit={handelSubmit} >
            <HeaderAccount text={headerText} />
            <div className='d-flex justify-content-center forgot-password-main'>
                <div className='d-flex forgot-password-data'>
                    <div className='cursor-pointer' style={{ width: "10%" }}>
                        <FontAwesomeIcon icon={faArrowLeft} color='#ff7e2b' onClick={() => navigate('/login')} />
                    </div>
                    <div className='' style={{ width: "80%" }}>
                        <div className='d-flex justify-content-center'>
                            <h1 style={{ fontSize: '22px', fontWeight: '400' }}>{t(headerText)}</h1>
                        </div>
                        <input type='text' className='form-control mt-4' placeholder={t("email")} />
                        <button type='submit' className='btn btn-primary w-100 mt-4 p-2'>{t(headerText)}</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ForgotPassword;
