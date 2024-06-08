'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Dancing_Script } from 'next/font/google';
import LanguageChanger from './switch-locale';

const ds = Dancing_Script({ subsets: ['latin'] });

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className='flex items-center justify-between'>
      <div>
        <h1 className={`${ds.className} font-medium text-2xl sm:text-4xl`}>
          {t('title')}
        </h1>
      </div>
      <div className='flex items-center justify-center gap-x-6 text-sm'>
        <LanguageChanger />
      </div>
    </header>
  );
}
