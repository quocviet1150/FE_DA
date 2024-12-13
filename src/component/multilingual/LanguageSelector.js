import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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
    const [isHovered, setIsHovered] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        languages.find((lng) => lng.code === i18n.language)?.lang || "English"
    );

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    const changeLanguage = (lng) => {
        showLoading();
        i18n.changeLanguage(lng)
            .then(() => {
                const selectedLang = languages.find((language) => language.code === lng)?.lang;
                setSelectedLanguage(selectedLang || "English");
            })
            .finally(() => hideLoading());
    };

    return (
        <div
            className="icon-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FontAwesomeIcon icon={faEarth} className="earth-icon" style={{marginRight:'5px'}}/>
            <span className="selected-language">{selectedLanguage}</span>
            {isHovered && (
                <div className="language-selector">
                    {languages.map((lng) => (
                        <div
                            className={lng.code === i18n.language ? "selected" : ""}
                            key={lng.code}
                            onClick={() => changeLanguage(lng.code)}
                            style={{ cursor: "pointer" }}
                        >
                            {lng.lang}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
