import Header from '@/components/header';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import About from '@/components/about';
import Footer from '@/components/footer';
import Location from '@/components/location';

export default function Index() {
  const tr = useTranslations('About');

  return (
    <main>
      <Header />
      <div className='my-6'>
        <Image
          src={'/laPlata.jpg'}
          height={400}
          width={425}
          alt='La Plata, Argentina'
          className='rounded-md hover:scale-105 transition-all duration-150 mt-2 mx-4 hidden sm:block sm:float-right'
        />
        <p className='text-pretty prose max-w-full'>{tr('about')}</p>
      </div>
      <section className='my-8'>
        <div className='columns-2 sm:columns-3 gap-4 mt-6 mb-10'>
          <div className='relative h-40 mb-4'>
            <Image
              alt='empanada argentina'
              src='/Allora.jpg'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              quality={100}
              className='rounded-md object-cover hover:scale-105 transition-all duration-150'
            />
          </div>
          <div className='relative h-80 mb-4 sm:mb-0'>
            <Image
              alt='empanadas argentinas'
              src='/Allora2.jpg'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              quality={100}
              className='rounded-md object-cover hover:scale-105 transition-all duration-150'
            />
          </div>
          <div className='relative h-40 sm:h-80 sm:mb-4'>
            <Image
              alt='entrecot patagonia'
              src='/Patagonia3.jpg'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              quality={100}
              className='rounded-md object-cover hover:scale-105 transition-all duration-150'
            />
          </div>
          <div className='relative h-40 mb-4 sm:mb-0'>
            <Image
              alt='mollejas patagonia'
              src='/Patagonia.jpg'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              quality={100}
              className='rounded-md object-cover hover:scale-105 transition-all duration-150'
            />
          </div>
          <div className='relative h-40 mb-4'>
            <Image
              alt='choripan patagonia'
              src='/Patagonia2.jpg'
              fill
              sizes='(max-width: 768px) 213px, 33vw'
              priority
              quality={100}
              className='rounded-md object-cover hover:scale-105 transition-all duration-150'
            />
          </div>
          <div className='relative h-80'>
            <Image
              alt='fayiz lebanon'
              src='/Fayiz-Lebanon.jpg'
              fill
              sizes='(min-width: 768px) 213px, 33vw'
              priority
              className='rounded-md object-cover hover:scale-105 transition-all duration-150'
              quality={100}
            />
          </div>
        </div>
      </section>
      <About />
      <Location />
      <Footer />
    </main>
  );
}
