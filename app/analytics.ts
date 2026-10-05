// Analytics event abstraction — provider-agnostic, no PII
// Connect a provider (GA4, Plausible, Mixpanel) by swapping the `send` impl below.

type AnalyticsEvent =
  | 'hero_cta'
  | 'needs_selected'
  | 'solution_view'
  | 'solution_cta'
  | 'chimi_open'
  | 'chimi_quick_reply'
  | 'chimi_message'
  | 'chimi_recommendation'
  | 'chimi_form'
  | 'chimi_whatsapp'
  | 'form_start'
  | 'form_submit'
  | 'instagram_click';

interface EventProps {
  [key: string]: string | number | boolean | undefined;
}

function send(event: AnalyticsEvent, props?: EventProps): void {
  // Swap implementation: e.g. window.gtag('event', event, props)
  if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).__hg_analytics_debug) {
    console.debug('[HG Analytics]', event, props);
  }
}

export const track = {
  heroCta: (source: string) => send('hero_cta', { source }),
  needSelected: (need: string) => send('needs_selected', { need }),
  solutionView: (pack: string) => send('solution_view', { pack }),
  solutionCta: (pack: string) => send('solution_cta', { pack }),
  chimiOpen: () => send('chimi_open'),
  chimiQuickReply: (value: string, stage: string) => send('chimi_quick_reply', { value, stage }),
  chimiMessage: () => send('chimi_message'),
  chimiRecommendation: (pack: string) => send('chimi_recommendation', { pack }),
  chimiForm: (pack: string) => send('chimi_form', { pack }),
  chimiWhatsapp: (need: string) => send('chimi_whatsapp', { need }),
  formStart: () => send('form_start'),
  formSubmit: (pack: string) => send('form_submit', { pack }),
  instagramClick: () => send('instagram_click'),
};
