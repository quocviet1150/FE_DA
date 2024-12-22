import React, { useState } from 'react';
import './verify.css';
import FooterAccount from '../../footer/footer';
import HeaderAccount from '../../header/headerAccount';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoading } from '../../loading/LoadingProvider';
import { AccountApi } from '../../../api/account/accountApi';

const Verify = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const { showLoading, hideLoading } = useLoading();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!code) {
            setError(t("please_enter_information"));
            return;
        }

        const data = {
            token: code,
        };

        try {
            showLoading();
            AccountApi.verify(data)
                .then(() => {
                    toast.success(t('verify_success'));
                    navigate('/login');
                    hideLoading();
                })
                .catch((error) => {
                    hideLoading();
                    toast.error(t('system_error'));
                });
        } catch (error) {
            hideLoading();
            console.log(error);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <HeaderAccount text={t("vertify")} />
            <div className='d-flex justify-content-center forgot-password-main'>
                <div className='d-flex forgot-password-data'>
                    <div className='cursor-pointer' style={{ width: "10%" }}>
                        <FontAwesomeIcon icon={faArrowLeft} color='#ff7e2b' onClick={() => navigate('/login')} />
                    </div>
                    <div style={{ width: "80%" }}>
                        <div className='d-flex justify-content-center'>
                            <h1 style={{ fontSize: '22px', fontWeight: '400' }}>{t("vertify")}</h1>
                        </div>
                        <input
                            type='code'
                            className='form-control mt-4'
                            placeholder={t("code")}
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        {error && <div className="text-danger fs-custom">{error}</div>}
                        <button type='submit' className='btn btn-primary w-100 mt-4 p-2'>{t("vertify")}</button>
                    </div>
                </div>
            </div>
            <FooterAccount />
        </form>
    );
};
export default Verify;