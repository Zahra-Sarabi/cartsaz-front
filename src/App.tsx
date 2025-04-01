import { useEffect, useState } from 'react';

function App() {
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
    <div className='bg-secondary text-center '>
      <h1 className='text-4xl text-sky-600'>hellloooo</h1>
      <h1 className='text-4xl  text-sky-600'>سلام</h1>

      <p className='read-the-docs color-primary'>Click on the Vite and React logos to learn more</p>
      <button className='bg-amber-400 p-1.5' onClick={handleSwitchMode}>
        {mode}
      </button>
    </div>
  );
}

export default App;
