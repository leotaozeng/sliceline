import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  // load translation using http -> see /public/locales
  .use(Backend)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    lng: 'en',

    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
