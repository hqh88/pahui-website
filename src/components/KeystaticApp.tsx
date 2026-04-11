import { useMemo } from 'react';
import { makePage } from '@keystatic/astro/ui';
import { createKeystaticConfig } from '../../keystatic.config';
import type { Locale } from '../i18n/keystatic-labels';

const STORAGE_KEY = 'keystatic-locale';

function getLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'zh' || stored === 'en') return stored;
  } catch {}
  return 'en';
}

export default function KeystaticApp() {
  const locale = getLocale();
  const Page = useMemo(() => makePage(createKeystaticConfig(locale)), [locale]);
  return <Page />;
}
