import React from "react";
import "./popup.css";
import { useTranslation } from "react-i18next";

const Popup = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="popup-container">
                <div className="popup-arrow"></div>
                <div className="popup-content">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
                        alt="No Products"
                        className="popup-image"
                    />
                    <p className="popup-text">{t("no_product")}</p>
                </div>
            </div>
        </>
    );
};

export default Popup;
