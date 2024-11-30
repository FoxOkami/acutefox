import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [alphaValue, setAlphaValue] = useState(0.2);

  useEffect(() => {
    let prevY;
    const handleWheel = (event) => {
      setAlphaValue(prev => Math.max(0, Math.min(1, prev + (1 / 100) * Math.sign(event.deltaY))));
    };
    const handleTouchStart = (event) => {
      prevY = event.touches[0].clientY;
    };
    const handleTouchEnd = (event) => {
      prevY = undefined;
    }
    const handleTouchMove = (event) => {
      const currentY = event.touches[0].clientY;
      const deltaY = prevY - currentY;

      if (Math.abs(deltaY) > 1 && deltaY > 0) {
        setAlphaValue(prev => Math.max(0, Math.min(1, prev + 0.1)));
      }
      else if (deltaY < 0) {
        setAlphaValue(prev => Math.max(0, Math.min(1, prev - 0.1)));
      }
      prevY = currentY;
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="App" style={{ backgroundColor: 'rgba(0,0,255,' + alphaValue + ')' }}>
      <div className='company-header'>
        <img src='logo.svg' alt='🦊' className='company-header-logo' />
        <div className='company-header-text'>
          <h1 style={{ margin: 'unset' }}>acutefox</h1>
          <h2 style={{ margin: 'unset', filter: 'drop-shadow(0em 0em 0.1em rgba(0,0,255,' + (1 - alphaValue) + '))' }}>custom websites & applications</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
