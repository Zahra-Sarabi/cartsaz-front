import { Outlet } from 'react-router-dom';
import { LandingHeader } from '../features/landing/landing-header';
import { LandingFooter } from '../features/landing/landing-footer';

export const LandingLayout = () => {
  return (
    <div>
      <header>
        <LandingHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer><LandingFooter /></footer>
    </div>
  );
};
