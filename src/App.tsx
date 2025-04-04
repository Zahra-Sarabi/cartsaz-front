import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './pages/auth';
import { LandingLayout } from './pages/landing.layout';
import { Home } from './features/landing/home';

function App() {
  return (
    <div className='container mx-auto px-4 pb-4 '>
      <Routes>
        <Route path='/' element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
