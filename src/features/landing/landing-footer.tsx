import { PencilIcon } from '../../../public/Icons/pencil';
import { LogoMain } from '../../../public/Icons/logo-main';
import { TelegramIcon } from '../../../public/Icons/telegram';
import { InstagramIcon } from '../../../public/Icons/instagram';

export const LandingFooter = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='py-10 items-center  px-3 justify-between bg-white-light flex flex-col w-full'>
        <p className=' font-bold text-2xl mb-2'>هم اکنون ثبت نام کنید!</p>
        <p className=' text-sm mb-6'>
          ثبت نام در کارت ساز رایگان است. همین الان ثبت نام کنید و کارت ساز را تست کنید.
        </p>
        <button className='text-white flex gap-2 bg-orange-main w-fit rounded-4xl text-sm'>
          <PencilIcon />
          <p>ثبت نام رایگان</p>
        </button>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-bold'>
          <span className='text-primary font-bold'> کارت ساز</span> چیست؟
        </p>
        <p>
          کارت ساز یک سیستم نویان است که به شما امکان می‌دهد برای مشتریان خود یک صفحه‌ی خرید ایجاد
          کنید و سپس از طریق لینک اختصاصی (cart) خرید خود را مدیریت کنید. اگر مشتری خرید خود را
          تکمیل کند، کارت ساز به شما نام و اطلاعات مربوطه را نمایش می‌دهد. همچنین، سیستم دارای
          امکانات متعددی برای تحلیل داده‌ها و مدیریت سفارشات است. این ابزار برای کسب‌ و کارهای کوچک،
          فروشگاه‌های آنلاین، و حتی فروشندگان در شبکه‌های اجتماعی مانند اینستاگرام بسیار مفید است.
          شما می‌توانید به‌راحتی لینک پرداخت و سفارش را برای مشتری ارسال کنید و خرید را ساده‌تر
          کنید. همچنین، از روش‌های پرداخت متنوع مانند کارت‌های اعتباری، والت‌های دیجیتال و سایر
          روش‌های پرداخت پشتیبانی می‌شود.
        </p>
        <div className='flex w-full h-1 bg-white-dark '></div>
      </div>

      <div className='gap-3 flex items-center justify-between '>
        <div className='flex  gap-3 items-center flex-col sm:flex-row'>
          <LogoMain />
        </div>
        <div className='flex gap-2'>
          <div className='rounded-full border border-white-dark p-1'>
            <TelegramIcon />
          </div>
          <div className='rounded-full border border-white-dark p-1'>
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
