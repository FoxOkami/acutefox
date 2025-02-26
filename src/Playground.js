import React, { useEffect, useState } from 'react';
import "./Playground.css"

export default function Playground() {
    const [alphaValue, setAlphaValue] = useState(0.2);
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

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);
    return (
        <div className='playground' style={{ backgroundColor: 'rgba(0,0,255,' + alphaValue + ')' }}>
        </div>
    );
}