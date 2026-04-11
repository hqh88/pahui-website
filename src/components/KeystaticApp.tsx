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

const toolbarStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 56,
  left: 16,
  zIndex: 9999,
  display: 'flex',
  gap: 6,
  fontFamily: 'system-ui, sans-serif',
};

const btnStyle: React.CSSProperties = {
  padding: '6px 14px',
  borderRadius: 6,
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(30,30,30,0.85)',
  color: '#fff',
  fontSize: 13,
  cursor: 'pointer',
  backdropFilter: 'blur(8px)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
};

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
      <div style={toolbarStyle}>
        <button onClick={toggleLocale} style={btnStyle}>
          {locale === 'en' ? '中文' : 'EN'}
        </button>
        <a href="/admin/analytics" style={btnStyle}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10M12 20V4M6 20v-6"/>
          </svg>
          {locale === 'en' ? 'Analytics' : '访客统计'}
        </a>
      </div>
      <Page />
    </>
  );
}
