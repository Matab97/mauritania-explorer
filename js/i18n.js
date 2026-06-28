import { state } from './state.js';

// ── UI translation dictionary ─────────────────────────────────────────────────
export const I18N = {
  en: {
    tagline: 'Click on any location to discover it',
    legend:  { all:'All', nature:'Nature', historic:'Historic', transport:'Transport', city:'Cities' },
    cat:     { nature:'Nature', historic:'Historic', transport:'Transport', city:'City' },
    prev:'Prev', next:'Next',
    play:'Play Music', pause:'Pause',
    introTitle:'Mauritania Explorer',
    introSub:'An interactive journey through the Sahara and beyond',
    home:'home',
  },
  ar: {
    tagline: 'اضغط على أي موقع لاكتشافه',
    legend:  { all:'الكل', nature:'طبيعة', historic:'تاريخي', transport:'نقل', city:'مدن' },
    cat:     { nature:'طبيعة', historic:'تاريخي', transport:'نقل', city:'مدينة' },
    prev:'السابق', next:'التالي',
    play:'تشغيل الموسيقى', pause:'إيقاف',
    introTitle:'مستكشف موريتانيا',
    introSub:'رحلة تفاعلية عبر الصحراء وما وراءها',
    home:'الرئيسية',
  },
};

export const t = key => (I18N[state.LANG] && I18N[state.LANG][key] !== undefined) ? I18N[state.LANG][key] : I18N.en[key];
