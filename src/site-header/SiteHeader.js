import "./SiteHeader.css";

export default function SiteHeader() {
  return (
    <div className="site-header">
      <a href="#home-landing" className="site-header-company-link">
        <div className="site-header-company">
          <img src="logo.svg" />
          <h1 className="site-header-company-name">acutefox</h1>
        </div>
      </a>
      <nav className="site-header-top-navigation">
        <a href="#home-landing">Home</a>
        <a href="#about-landing">About</a>
        <a href="#services-landing">Services</a>
        <a href="#contact-landing">Contact</a>
      </nav>
    </div>
  );
}
