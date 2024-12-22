import React from "react";
import "../../popup/popup.css";
import { useTranslation } from "react-i18next";

const PopupAccount = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="popup-container-acc" >
                <div className="popup-arrow"></div>
                <div className="popup-content" style={{color: "black"}}>
                    <div className="pt-2 field-pop-acc">{t("my_acc")}</div>
                    <div className="pt-2 field-pop-acc">{t("my_pur")}</div>
                    <div className="pt-2 field-pop-acc">{t("logout")}</div>
                </div>
            </div>
        </>
    );
};

export default PopupAccount;
