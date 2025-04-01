import { useEffect, useState } from 'react';
import './App.css';

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
    <div className='background'>
      <h1 className='text-4xl text-sky-600'>hellloooo</h1>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      <button className='bg-amber-400 p-1.5' onClick={handleSwitchMode}>
        {mode}
      </button>
    </div>
  );
}

export default App;
