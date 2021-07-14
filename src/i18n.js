import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  Eng: {
    translation: {
      "intro": "Blast past fast.",
      "first desc": `From $29.12/mo. for 24 mo. or $699 before trade-in
      Buy directly from Apple with special carrier offers`
    }
  },
  Fr: {
    translation: {
      "intro": "Passez vite. ",
      "first desc": `À partir de 29,12 $/mois. pendant 24 mois. ou 699 $ avant l'échange
      Achetez directement auprès d'Apple avec les offres spéciales des opérateurs`
    }
  },
  Pl: {
    translation: {
      "intro": "Szybko mijaj.",
      "first desc": `Od 29,12 USD/mies. przez 24 mies. lub 699 USD przed wymianą
      Kupuj bezpośrednio od Apple ze specjalnymi ofertami przewoźnika`
    }
  },
  Rus: {
    translation: {
      "intro": "Быстро пролететь мимо.",
      "first desc": `От $ 29,12 / мес. на 24 мес. или 699 долларов до обмена
      Покупайте напрямую у Apple со специальными предложениями операторов связи`
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    debug: true,
    lng: "Eng", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


  function changeLng(lng) {
    i18n.changeLanguage(lng);
  }
  
  i18n.on('languageChanged', () => {
    changeLng();
  });

  export default i18n;