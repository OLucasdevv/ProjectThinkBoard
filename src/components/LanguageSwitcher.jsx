import { useState } from "react";
import { useTranslation } from "react-i18next";


const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const language = [
        {code: "pt", name: "Português", flag: "🇧🇷" },
        {code: "en", name: "English", flag: "🇺🇸"}
    ];
    const current = language.find(lang => lang.code === i18n.language) || language[0];
    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen (false)
        };
        return (
            <div className = "lang-switcher">
                <button className = "lang-current" onClick={() => setIsOpen (!isOpen)}>
                    <span classname = "flag">{current.flag}</span>
                    <span className = "lang-name">{current.name}</span>
                    <span className = "arrow">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                    <div className = "lang-menu">
                        {language.map((lang =>
                            <button
                                key = {lang.code}
                                className = {`lang-option ${lang.code === i18n.language ? "active" :  ""}`}
                                onClick={() => handleLanguageChange(lang.code)}
                            >
                                 <span className = "flag">{lang.flag}</span>
                                 <span className = "lang-name">{lang.name}</span>
                            </button>
                        ))}
                    </div>
                )}
                
            </div>
        );
};
export default LanguageSwitcher;