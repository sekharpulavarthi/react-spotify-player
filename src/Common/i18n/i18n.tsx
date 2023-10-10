import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEnglish from "../translation/English/en.json";

import translationTelugu from "../translation/Telugu/te.json";

const resources = {
    en:{
        translation: translationEnglish
    },
    te:{
        translation: translationTelugu,
    }
}

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        lng: "en",
        resources
    });

export default i18n;
