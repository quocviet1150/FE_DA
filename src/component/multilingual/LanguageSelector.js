import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLoading } from "../loading/LoadingProvider";

const languages = [
    { code: "en", lang: "English" },
    { code: "vi", lang: "Việt Nam" },
    { code: "jp", lang: "Japan" }
];

const LanguageSelector = () => {
    const { showLoading, hideLoading } = useLoading();
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    const changeLanguage = (lng) => {
        showLoading();
        i18n.changeLanguage(lng)
            .finally(() => hideLoading());
    };

    return (
        <div className="btn-container">
            {languages.map((lng) => {
                return (
                    <button
                        className={lng.code === i18n.language ? "selected" : ""}
                        key={lng.code}
                        onClick={() => changeLanguage(lng.code)}
                    >
                        {lng.lang}
                    </button>
                );
            })}
        </div>
    );
};

export default LanguageSelector;