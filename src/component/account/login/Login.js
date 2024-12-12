import React from 'react';
import '../../account/account.css';
import LanguageSwitcher from '../../multilingual/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <form onSubmit={handelSubmit} >
            <div className='header-login'>
                <div className='d-flex w-50'>
                    <div className='w-50'>tes</div>
                    <div className='d-flex w-50 justify-content-end text-danger'>{t("need_help")}</div>
                </div>
            </div>
             <LanguageSwitcher />
        </form>
    );
};

export default Login;
