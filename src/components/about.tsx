import { Dancing_Script } from 'next/font/google';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ds = Dancing_Script({ subsets: ['latin'] });

export default function About() {
  const t = useTranslations('About');
  return (
    <section className='space-y-14'>
      <div>
        <div className='flex items-center justify-between'>
          <h2
            className={`${ds.className} font-medium text-3xl md:text-7xl mb-4`}
          >
            Allora L&apos;Originale
          </h2>
          <div className='flex items-center justify-center gap-x-3'>
            <a href='https://www.instagram.com/alloramagazinos/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
                <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                <path d='M16.5 7.5l0 .01' />
              </svg>
            </a>
            <a
              href='/CARTA ALLORA PAGATONIA.pdf'
              download
              className='hover:underline font-medium'
            >
              Menu
            </a>
          </div>
        </div>
        <p className='text-pretty prose max-w-full'>{t('Allora')}</p>
        <div className='w-full relative h-80 my-4'>
          <Image
            alt='empanada argentina'
            src='/Allora3.jpg'
            fill
            priority
            quality={100}
            className='rounded-md object-cover transition-all duration-150'
          />
        </div>
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <h2
            className={`${ds.className} font-medium text-3xl md:text-7xl mb-4`}
          >
            Patagonia
          </h2>
          <div className='flex items-center justify-center gap-x-3'>
            <a href='https://www.instagram.com/patagonia.magazinos/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
                <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                <path d='M16.5 7.5l0 .01' />
              </svg>
            </a>
            <a
              href='/CARTA ALLORA PAGATONIA.pdf'
              download
              className='hover:underline font-medium'
            >
              Menu
            </a>
          </div>
        </div>
        <p className='text-pretty prose max-w-full'>{t('Patagonia')}</p>
        <div className='w-full relative h-96 my-4'>
          <Image
            alt='empanada argentina'
            src='/Patagonia4.jpg'
            fill
            priority
            quality={100}
            className='rounded-md object-cover transition-all duration-150'
          />
        </div>
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <h2
            className={`${ds.className} font-medium text-3xl md:text-7xl mb-4`}
          >
            Fayiz Lebanon
          </h2>
          <div className='flex items-center justify-center gap-x-3'>
            <a
              href='/CARTAS FAYIZ.pdf'
              download
              className='hover:underline font-medium'
            >
              Menu
            </a>
          </div>
        </div>
        <p className='text-pretty prose max-w-full'>{t('Fayiz')}</p>
        <div className='w-full relative h-80 my-4'>
          <Image
            alt='empanada argentina'
            src='/fayiz2.jpg'
            fill
            priority
            quality={100}
            className='rounded-md object-cover transition-all duration-150'
          />
        </div>
      </div>
    </section>
  );
}
