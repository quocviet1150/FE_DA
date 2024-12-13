import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const FooterAccount = () => {
    const { t } = useTranslation();

    return (
        <div className='footer-account-main'>
            <div className="d-flex justify-content-center w-100">
                <div className='footer-account' style={{ borderBottom: '1px solid #ccc' }}>
                    <div className="footer-account-content">test</div>
                    <div className="footer-account-content">test</div>
                    <div className="footer-account-content">
                        <h1 style={{ fontSize: '16px', fontWeight: '500' }}>{t("payment")}</h1>
                        <div className="mt-4">
                            <div className="d-flex gap-2">
                                <img src="https://static.ybox.vn/2021/9/4/1631756121713-1631085786958-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20-%202021-09-08T002253.248.png" style={{ height: '30px' }} alt="ups" />
                                <img src="https://static.ybox.vn/2020/9/4/1600327260787-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20(31).png" style={{ height: '30px' }} alt="ups" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZVi1ONQU4G692Pcg5D_LbIuhEtguYPMrXg&s" style={{ height: '30px' }} alt="ups" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-account-content">
                        <h1 style={{ fontSize: '16px', fontWeight: '500' }}>{t("follow_us")}</h1>
                        <div className="mt-4">
                            <div className="d-flex gap-2 align-items-center mb-2">
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </div>
                            <div className="d-flex gap-2 align-items-center mb-2">
                                <FontAwesomeIcon icon={faInstagram} /> Instagram
                            </div>
                            <div className="d-flex gap-2 align-items-center mb-2">
                                <FontAwesomeIcon icon={faTiktok} /> Tiktok
                            </div>
                        </div>
                    </div>
                    <div className="footer-account-content">
                        <h1 style={{ fontSize: '16px', fontWeight: '500' }}>{t("shipping_unit")}</h1>
                        <div className="mt-4">
                            <div className="d-flex gap-2">
                                <img src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d" style={{ height: '30px' }} alt="ups" />
                                <img src="https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185" style={{ height: '30px' }} alt="ups" />
                                <img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" style={{ height: '30px' }} alt="ups" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center w-100">
                <div className='footer-account'>
                    <div style={{ width: '35%', }} className="pt-4">
                        {t("all_rights_reserved")}
                    </div>
                    <div style={{ width: '65%' }} className="pt-4">
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#f5f5f5' }} className="d-flex justify-content-center w-100">
                <div className="pt-4 footer-links">
                    <h1 style={{ fontSize: '14px', fontWeight: '400' }}>{t("privacy_policy")}</h1>
                    <span>|</span>
                    <h1 style={{ fontSize: '14px', fontWeight: '400' }}>{t("operation_policy")}</h1>
                    <span>|</span>
                    <h1 style={{ fontSize: '14px', fontWeight: '400' }}>{t("shipping_policy")}</h1>
                    <span>|</span>
                    <h1 style={{ fontSize: '14px', fontWeight: '400' }}>{t("return_refund_policy")}</h1>
                </div>
            </div>
            <div style={{ backgroundColor: '#f5f5f5' }} className="d-flex justify-content-center w-100">
                <div className="pt-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ height: '30px' }} alt="ups" /> VietShop
                </div>
            </div>
            <div style={{ backgroundColor: '#f5f5f5' }} className="d-flex justify-content-center w-100">
                <div className="pt-4">
                    {t("all_rights_reserved_us")}
                </div>
            </div>
        </div>
    );
}
export default FooterAccount;