'use client';

import { usePathname } from '@/navigation';
import { Link } from '@/navigation';
import { cn } from '@/utils/cn';
import { useLocale } from 'next-intl';

export default function LanguageChanger() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const locales: Array<'es' | 'en' | 'de' | 'fr'> = ['es', 'en', 'fr', 'de'];

  return (
    <div className='inline-flex italic text-sm justify-evenly gap-x-2 uppercase'>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          className={cn('font-medium', {
            'text-gray-400': locale === currentLocale,
          })}
          aria-disabled={locale === currentLocale}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
