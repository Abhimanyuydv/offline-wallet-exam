import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocales } from "react-native-localize";

const STORAGE_KEY = "APP_LANG";

const resources = {
  en: {
    translation: {
      logo: "LOGO",
      signIn: "Sign In",
      welcome: "Welcome",
      subtitle: "Your personalized agri-trade overview",
      searchPlaceholder: "Search stocks, commodities & contracts",

      marketAction: "Market Action",
      globalMarkets: "Global Markets",
      stockAction: "Stock Action",

      index: "Index",
      price: "Price",
      change: "% Change",

      latestNewsFeed: "Latest News Feed",
      all: "All",
      market: "Market",
      agri: "Agri",
      expertView: "Expert View",
    },
  },
  hi: {
    translation: {
      logo: "लोगो",
      signIn: "साइन इन",
      welcome: "स्वागत है",
      subtitle: "आपका व्यक्तिगत एग्री-ट्रेड ओवरव्यू",
      searchPlaceholder: "स्टॉक्स, कमोडिटी और कॉन्ट्रैक्ट खोजें",

      marketAction: "मार्केट एक्शन",
      globalMarkets: "ग्लोबल मार्केट्स",
      stockAction: "स्टॉक एक्शन",

      index: "इंडेक्स",
      price: "कीमत",
      change: "% बदलाव",

      latestNewsFeed: "ताज़ा न्यूज़ फ़ीड",
      all: "सभी",
      market: "मार्केट",
      agri: "कृषि",
      expertView: "एक्सपर्ट व्यू",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  lng: "en",
});

export async function initLanguage() {
  const saved = await AsyncStorage.getItem(STORAGE_KEY);
  if (saved) {
    await i18n.changeLanguage(saved);
    return;
  }
  const deviceLang = getLocales()?.[0]?.languageCode;
  const initial = deviceLang === "hi" ? "hi" : "en";
  await i18n.changeLanguage(initial);
  await AsyncStorage.setItem(STORAGE_KEY, initial);
}

export async function setAppLanguage(lang) {
  await i18n.changeLanguage(lang);
  await AsyncStorage.setItem(STORAGE_KEY, lang);
}

export default i18n;
