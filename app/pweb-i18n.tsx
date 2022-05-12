import i18n from 'i18next';
import {initReactI18next, useTranslation, Trans} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from "i18next";

let resources: any = {};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
            lookupQuerystring: 'lng',
        }
    });

export const _t = (text: any) => {
    return i18next.t(text)
}

const numberTranslation: any = {
    "bn": {0: "০", 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯"}
}

export const _tNumber = (text: any) => {
    if (!text) {
        return text
    }
    text += ""
    let lang: string = i18n.language
    let translate = numberTranslation[lang]
    if (translate) {
        for (let key in translate) {
            text = text.replaceAll(key, translate[key]);
        }
    }
    return text
}

export const _loadTranslation = (lang: string, translation: any) => {
    if (!resources[lang] || !resources[lang].translation) {
        resources[lang] = {translation: {}}
        resources[lang] = {}
    }
    resources[lang].translation = {...resources[lang].translation, ...translation}
}

export {i18n, useTranslation, Trans}