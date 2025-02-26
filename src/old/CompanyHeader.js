import './CompanyHeader.css';

export default function CompanyHeader() {
    return (
        <div className='company-header'>
            <img src='logo.svg' alt='🦊' className='company-header-logo' draggable='false' />
            <div className='company-header-text'>
                <h1 style={{ margin: 'unset' }}>acutefox</h1>
                <h2 style={{ margin: 'unset' }}>custom websites & applications</h2>
                <div className='contact-me'>
                    <a href='mailto:elias.ewert@gmail.com' className='svg-link' target='_blank'>
                        <svg width='auto' height='1.2em' viewBox='0 0 32.972 21.689'>
                            <path style={{ fill: 'none', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }}
                                d='M 29.649368,1 H 3.3229214 A 2.3229216,1.4767059 0 0 0 1,2.4767061 V 19.212707 a 2.3229216,1.4767059 0 0 0 2.3229214,1.476706 H 29.649368 A 2.3229216,1.4767059 0 0 0 31.97229,19.212707 V 2.4767061 A 2.3229216,1.4767059 0 0 0 29.649368,1 Z M 1.8405533,1.5343486 16.486205,12.683245 31.131853,1.5343486'
                            />
                        </svg>
                    </a>
                    <div style={{ width: '1.2em' }}></div>
                    <a href='https://www.linkedin.com/in/elias-ewert-bbb840176/' target='_blank' className='svg-link'>
                        <svg width='auto' height='1.2em' viewBox='0 0 21.5 21.5'>
                            <path style={{ fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}
                                d='m 19.25,0.75 h -17 a 1.5,1.5 0 0 0 -1.5,1.5 v 17 a 1.5,1.5 0 0 0 1.5,1.5 h 17 a 1.5,1.5 0 0 0 1.5,-1.5 v -17 a 1.5,1.5 0 0 0 -1.5,-1.5 z m -12.5,17 h -3 v -9 h 3 z M 5.25,7 A 1.75,1.75 0 1 1 7.05,5.25 1.78,1.78 0 0 1 5.25,7 Z m 12.5,10.75 h -3 v -4.74 c 0,-1.42 -0.6,-1.93 -1.38,-1.93 a 1.74,1.74 0 0 0 -1.62,1.86 0.66,0.66 0 0 0 0,0.14 v 4.67 h -3 v -9 h 2.9 v 1.3 a 3.11,3.11 0 0 1 2.7,-1.4 c 1.55,0 3.36,0.86 3.36,3.66 z'
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}