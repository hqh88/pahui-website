import { useState, useMemo } from 'react';
import { makePage } from '@keystatic/astro/ui';
import { createKeystaticConfig } from '../../keystatic.config';
import type { Locale } from '../i18n/keystatic-labels';

const STORAGE_KEY = 'keystatic-locale';

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'zh' || stored === 'en') return stored;
  } catch {}
  return 'en';
}

export default function KeystaticApp() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  const Page = useMemo(() => {
    return makePage(createKeystaticConfig(locale));
  }, [locale]);

  const toggleLocale = () => {
    const next = locale === 'en' ? 'zh' : 'en';
    localStorage.setItem(STORAGE_KEY, next);
    setLocale(next);
  };

  return (
    <>
      <button
        onClick={toggleLocale}
        style={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          zIndex: 9999,
          padding: '6px 14px',
          borderRadius: 6,
          border: '1px solid rgba(255,255,255,0.15)',
          background: 'rgba(30,30,30,0.85)',
          color: '#fff',
          fontSize: 13,
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {locale === 'en' ? '中文' : 'EN'}
      </button>
      <Page />
    </>
  );
}
