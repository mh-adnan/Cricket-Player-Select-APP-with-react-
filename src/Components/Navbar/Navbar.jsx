import logo from '../assets/logo-footer.png';
import bannerMain from '../assets/banner-main.png'; 

import './Navbar.css';

export default function Navbar() {
  return (
    <>
      {/* Navbar section starts here */}
      <div className="nav-bar">
        <img src={logo} alt="pic nai" />
        <ul>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <p>0 BDT</p>
      </div>
      {/* Navbar section ends here */}

{/* Banner section starts here */}
<div className="banner-section">
  <img src={bannerMain} alt="Banner" className="banner-image" /> 
  <div className="banner-content">
    <p className="banner-title">Assemble Your Ultimate Dream 11 Cricket Team</p>
    <p className="banner-subtitle">Beyond Boundaries Beyond Limits</p>
    <button className="banner-button">Claim Free Credit</button>
  </div>
</div>
{/* Banner section ends here */}

    </>
  );
}
