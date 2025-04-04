import { useEffect, useState } from 'react';
import { IoMdMoon } from 'react-icons/io';
import { IoSunny } from 'react-icons/io5';

export const SwitchTheme = () => {
  const [mode, setMode] = useState('light');
  useEffect(() => {
    if (mode === 'light') {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [mode]);

  const handleSwitchMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <button onClick={handleSwitchMode} className='text-lg w-fit px-2'>
      {mode === 'light' ? <IoMdMoon color='var(--color-primary)'  size={24}/> : <IoSunny color='var(--color-primary)' size={24}/>}
    </button>
  );
};
