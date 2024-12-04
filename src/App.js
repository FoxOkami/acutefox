import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [alphaValue, setAlphaValue] = useState(0.2);
  const [clickPosition, setClickPosition] = useState({ posX: 0, posY: 0 });

  useEffect(() => {
    let prevY;
    const handleWheel = (event) => {
      setAlphaValue(prev => Math.max(0, Math.min(1, prev + (1 / 100) * Math.sign(event.deltaY))));
    };
    const handleTouchStart = (event) => {
      event.preventDefault();
      prevY = event.touches[0].clientY;
    };
    const handleTouchEnd = (event) => {
      event.preventDefault();
      prevY = undefined;
    }
    const handleTouchMove = (event) => {
      event.preventDefault();
      const currentY = event.touches[0].clientY;
      const deltaY = prevY - currentY;

      if (Math.abs(deltaY) > 1 && deltaY > 0) {
        setAlphaValue(prev => Math.max(0, Math.min(1, prev + 0.05)));
      }
      else if (deltaY < 0) {
        setAlphaValue(prev => Math.max(0, Math.min(1, prev - 0.05)));
      }
      prevY = currentY;
    };
    const handleClick = (event) => {
      setClickPosition(prev => (
        {
          //opacity: prev.opacity === 0 ? 1 : 0, // this flips back and forth
          posX: event.clientX - 8,
          posY: event.clientY - 8
        }));
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="App" style={{ backgroundColor: 'rgba(0,0,255,' + alphaValue + ')' }}>
      <div className='particle' style={{ opacity: 1, transform: 'translate(' + clickPosition.posX + 'px,' + clickPosition.posY + 'px)' }}></div>
      <div className='company-header'>
        <img src='logo.svg' alt='🦊' className='company-header-logo' draggable='false'/>
        <div className='company-header-text'>
          <h1 style={{ margin: 'unset' }}>acutefox</h1>
          <h2 style={{ margin: 'unset', filter: 'drop-shadow(0em 0em 0.1em rgba(0,0,255,' + (1 - alphaValue) + '))' }}>custom websites & applications</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
