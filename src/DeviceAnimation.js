import './DeviceAnimation.css';
import { useEffect, useState } from 'react';

export default function DeviceAnimation() {
    const [deviceType, setDeviceType] = useState('phone');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDeviceType(d => {
                if (d === 'phone') {
                    return 'tablet';
                }
                else if (d === 'tablet') {
                    return 'pc';
                }
                else {
                    return 'phone';
                }
            });
        }, 2000);
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className='device-container'>
            <div className={deviceType + ' animator'}>
                <div className='header'></div>
                <div className='sub-container'>
                    <div className='link-container'>
                        <div className='link'></div>
                        <div className='link'></div>
                        <div className='link'></div>
                    </div>
                    <div className='sub-content'></div>
                </div>
                <div className='main-content'></div>
                <div className='footer'></div>
            </div>
        </div>
    );
}