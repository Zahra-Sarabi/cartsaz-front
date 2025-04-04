import { LogoMini } from '../../../public/Icons/logo-mini';
import { VideoIcon } from '../../../public/Icons/video';
export const Home = () => {
  return (
    <div className='relative pb-40'>
      <div className='flex items-center justify-center'>
        <LogoMini color='var(--color-white-light) ' className='w-60 ' />
      </div>
      <div className='absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6'>
        {' '}
        <p className='font-semibold text-4xl max-w-lg text-center leading-14'>
          سامانه مدیریت{' '}
          <span className='text-primary relative'>
            هوشمند
            <span className='absolute bg-primary/10 h-4 w-full left-0  bottom-3.5 -z-10'></span>
          </span>{' '}
          سفارش‌های اینترنتی
        </p>
        <button className='flex gap-1 w-fit text-white-main rounded-3xl bg-primary'>
          <VideoIcon />
          <p>مشاهده وید‌ئو معرفی</p>
        </button>
        <p className='max-w-3xl text-md text-justify'>
          به راحتی سفارش خود را ثبت کنید. کارشناسان ما آماده‌اند تا در کوتاه‌ترین زمان ممکن،
          سفارش‌های شما را با دقت بررسی کنند. با استفاده از خدمات اختصاصی، می‌توانید از تجربه‌ای
          سریع‌تر و راحت‌تر بهره‌مند شوید. مدیریت نهایی نیز به عهده‌ی تیم تعیین‌شده خواهد بود.
        </p>
      </div>
    </div>
  );
};
