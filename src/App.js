import './App.css';
import './WebsiteSection.css';
import DeviceAnimation from './DeviceAnimation';

function App() {
  return (
    <div className='App'>
      <div className='site-header'>
        <div className='company'>
          <img src='logo.svg' />
          <h1 className='company-name'>acutefox</h1>
        </div>
        <nav className='top-navigation'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#contact'>Contact</a>
        </nav>
      </div>
      <div id='home' className='section'>
        <div className='section-header'>
          <h1>Custom Software and Website Development Services</h1>
        </div>
        <a href='#contact' className='contact-me-button'>Get in touch for a personalized solution</a>
      </div>
      <div className='head-image-container'>
        <img src='work_image_smaller.jpg' className='head-image' />
      </div>
      <div className='website-section'>
        <div className='description'>
          <h3>Unique, Elegant, Responsive</h3>
          <p>Building and maintaining websites that work on any platform and match your needs.</p>
          <p>Not everything fits in the prefab world, maybe you want more control or something that truly stands out.</p>
          <p>That's where ACUTEFOX comes in.</p>
          <p>
            <a href='mailto:elias.ewert@gmail.com' className='text-link' target='_blank'>Reach out</a> and let's create something extraordinary!
          </p>
        </div>
        <DeviceAnimation />
      </div>
      <div id='about' className='section-a'>
        <div className='section-b'>
          <h1 className='section-c'>Meet the Software Engineer Behind ACUTEFOX</h1>
          <p>With more than 10 years of experience in software development and website design, I am dedicated to creating unique and innovative solutions for my clients.</p>
          <p>I specialize in tailoring each solution to meet client specific requirements and ensuring a seamless and efficient user experience.</p>
          <p>Whether you are an individual looking for something to showcase your own talents, a small business aiming to improve online presence, or a large corporation in need of custom software solutions, ACUTEFOX is here to help. Contact me today to discuss how I can help out.</p>
        </div>
      </div>
      <div id='services' className='section-a'>
        <h1>Our Services</h1>
        <div className='cards-container'>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='work_image.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>We design tailored software solutions that perfectly fit your unique goals.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='work_image.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>We design tailored software solutions that perfectly fit your unique goals.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='work_image.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>We design tailored software solutions that perfectly fit your unique goals.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='work_image.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>We design tailored software solutions that perfectly fit your unique goals.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='work_image.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>We design tailored software solutions that perfectly fit your unique goals.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='work_image.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>We design tailored software solutions that perfectly fit your unique goals.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='work_image.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>We design tailored software solutions that perfectly fit your unique goals.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='work_image.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>We design tailored software solutions that perfectly fit your unique goals.</div>
          </div>
        </div>
      </div>
      <div className='cityscape-image'></div>
      <div id='contact' className='section-a'>
        <h1>Get in Touch</h1>
        <form className='contact-form'>
          <div className='user-information'>
            <label className='user-name'>Name
              <input type='text' name='name' placeholder='Bobby Joe' />
            </label>
            <label className='user-email'>Email
              <input type='text' name='email' placeholder='example@domain.com' />
            </label>
          </div>
          <label className='user-message'>Message
            <textarea rows={10} placeholder='I would like a custom solution please!' />
          </label>
          <input type='submit' className='submit-button' />
        </form>
      </div>
    </div>
  );
}

export default App;
