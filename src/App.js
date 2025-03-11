import './App.css';
import './WebsiteSection.css';
import DeviceAnimation from './DeviceAnimation';

function App() {
  return (
    <div className='App' id='home' >
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
      <div className='section'>
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
          <p>Building and maintaining software that works on any platform and matches your needs.</p>
          <p>Not everything fits in the prefab world, maybe you want more control or something that truly stands out.</p>
          <p>That's where ACUTEFOX comes in.</p>
          <p>
            <a href='#contact' className='text-link'>Reach out</a> and let's create something extraordinary!
          </p>
        </div>
        <DeviceAnimation />
      </div>
      <div id='about' className='section-a lightgray-background jump-link'>
        <div className='section-b'>
          <h1 className='section-c'>Meet the Software Engineer Behind ACUTEFOX</h1>
          <p>With more than 10 years of experience in software development and website design, I am dedicated to creating unique and innovative solutions for my clients.</p>
          <p>I specialize in tailoring each solution to meet client specific requirements and ensuring a seamless and efficient user experience.</p>
          <p>Whether you are an individual looking for something to showcase your own talents, a small business aiming to improve online presence, or a large corporation in need of custom software solutions, ACUTEFOX is here to help. <a href='#contact'>Contact me</a> today to discuss how I can help out.</p>
        </div>
      </div>
      <div id='services' className='section-a jump-link'>
        <h1>Services</h1>
        <div className='cards-container'>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='gummy_worms.jpg' />
              <div className='card-title-text'>Custom Software</div>
            </div>
            <div className='card-description'>Tailored software solutions that perfectly fit your unique goals.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='containered_assorted_candy.jpg' />
              <div className='card-title-text'>Website Design</div>
            </div>
            <div className='card-description'>Visually stunning and user-friendly websites that represent your brand effectively.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='gummy_bears.jpg' />
              <div className='card-title-text'>Mobile Apps</div>
            </div>
            <div className='card-description'>Portable device solutions that connect you with your customers anytime and anywhere.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='m_ms.jpg' />
              <div className='card-title-text'>E-Commerce Solutions</div>
            </div>
            <div className='card-description'>Establish an e-commerce presense with trusted platforms with your bottom line in mind.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='assorted_candy.jpg' />
              <div className='card-title-text'>System Integration</div>
            </div>
            <div className='card-description'>Convert disjointed systems into a cohesive and effective singularity.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='jelly_beans.jpg' />
              <div className='card-title-text'>SEO Services</div>
            </div>
            <div className='card-description'>Enhance online visibility and drive traffic from leading search engines.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='spirals.jpg' />
              <div className='card-title-text'>Support & Maintenance</div>
            </div>
            <div className='card-description'>Keep applications running smoothly at all times.</div>
          </div>
          <div className='card'>
            <div className='card-title'>
              <img className='card-title-image' src='macaroons.jpg' />
              <div className='card-title-text'>Consultation</div>
            </div>
            <div className='card-description'>Insightful guides for your technology initiatives.</div>
          </div>
        </div>
      </div>
      <div id='contact' className='section-a lightgray-background'>
        <h1>Get in Touch</h1>
        <form className='contact-form'>
          <div className='user-information'>
            <input type='text' name='name' aria-label='name' placeholder='Name' className='input' />
            <input type='text' name='email' aria-label='email' placeholder='Email' className='input' />
          </div>
          <textarea rows={10} aria-label='message' placeholder='Message' className='textarea' />
          <input type='submit' className='contact-me-button' />
        </form>
      </div>
    </div>
  );
}

export default App;
