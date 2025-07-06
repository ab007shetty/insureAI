import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MainForm from './components/MainForm';
import Footer from './components/Footer';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  const goToLanding = () => setShowLanding(true);
  const startForm = () => setShowLanding(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLogoClick={goToLanding} />
      <div className="flex-1">
        {showLanding ? (
          <MainForm showLanding={true} onGetStarted={startForm} />
        ) : (
          <MainForm showLanding={false} />
        )}
      </div>
      <Footer />
    </div>
  );
}