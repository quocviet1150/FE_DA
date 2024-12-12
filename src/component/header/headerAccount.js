import { useTranslation } from "react-i18next";

const HeaderAccount = ({text}) => {
    const { t } = useTranslation();
    return (
        <div className='header-login'>
            <div className='d-flex align-items-center' style={{ width: '60%' }}>
                <div className='w-50 d-flex' style={{ gap: "1%" }}>
                    <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp' alt='logo' style={{ height: '50px' }} />
                    <h1 style={{ fontSize: '28px' }}>{t(text)}</h1>
                </div>
                <div className='d-flex w-50 justify-content-end text-danger'>{t("need_help")}</div>
            </div>
        </div>
    );
};

export default HeaderAccount;