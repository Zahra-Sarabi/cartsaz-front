import { LogoMain } from '../../../public/Icons/logo-main';
import { HiMenu } from 'react-icons/hi';

import { SwitchTheme } from '../../ui/switch-theme';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
export const LandingHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const handleOpenMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
        setIsOpenMenu(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sideMenuRef]);
  return (
    <div className='flex items-center my-6'>
      <div className='flex items-center me-auto'>
        <LogoMain className=' hidden sm:block' />
        <HiMenu onClick={handleOpenMenu} size={28} className='block ms-auto sm:ms-1 sm:hidden' />
      </div>
      <div className='flex items-center gap-1 '>
        <div className='hidden sm:block'>
          <nav className='flex gap-3  items-center ms-6 sm:blok'>
            <NavLink className='p-2' to={'/'}>
              تماس با ما
            </NavLink>
            <NavLink className='p-2' to={'/'}>
              سوالات متداول
            </NavLink>
            <NavLink className='p-2' to={'/'}>
              فروشگاه
            </NavLink>
          </nav>
        </div>
      </div>

      <div className='hidden sm:block'>
        <SwitchTheme />
      </div>
      <button className='btn-outline text-nowrap'>ورود یا ثبت نام</button>
      {/* mobile side menu */}
      {isOpenMenu && (
        <div
          ref={sideMenuRef}
          id='side-menu'
          className='bg-white-dark w-1/2 h-full absolute top-0 right-0 z-10 py-4 px-4 '
        >
          <div className='flex items-center'>
            <LogoMain />
            <MdClose className='ms-auto' size={24} onClick={() => setIsOpenMenu(false)} />
          </div>
          <nav className='flex flex-col-reverse gap-3  items-center ms-6 sm:blok mt-8'>
            <NavLink className='p-2' to={'/'}>
              تماس با ما
            </NavLink>
            <NavLink className='p-2' to={'/'}>
              سوالات متداول
            </NavLink>
            <NavLink className='p-2' to={'/'}>
              فروشگاه
            </NavLink>
          </nav>
          <div className='absolute bottom-0 left-0 p-4'>
            <SwitchTheme />
          </div>
        </div>
      )}
    </div>
  );
};
