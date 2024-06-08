import { Dancing_Script } from 'next/font/google';
import { useTranslations } from 'next-intl';

const ds = Dancing_Script({ subsets: ['latin'] });

export default function Location() {
  const t = useTranslations('Location');
  return (
    <section className='my-8'>
      <h2 className={`${ds.className} font-medium text-3xl md:text-7xl mb-4`}>
        {t('title')}
      </h2>
      <div className='flex flex-col items-start justify-center space-y-3 w-full'>
        <div className='pr-4 space-y-2'>
          <h4 className='font-semibold text-xl'>{t('subtitle')}</h4>
          <p className='italic font-medium'>
            🗺️ Carrer del Pont, 19, 03700 Dénia, Alicante
          </p>
          <p className='prose max-w-full py-2'>{t('magazinos')}</p>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6214.995684293945!2d0.10717537540282149!3d38.84395974985628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1b356ea69b99%3A0x3d3f4ff193858041!2sEls%20Magazinos!5e0!3m2!1ses-419!2ses!4v1717861197263!5m2!1ses-419!2ses'
          height='450'
          loading='lazy'
          className='rounded-md'
          style={{ width: '100%' }}
        ></iframe>
      </div>
    </section>
  );
}
