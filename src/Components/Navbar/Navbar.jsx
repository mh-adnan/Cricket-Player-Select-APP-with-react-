import logo from '../assets/logo-footer.png';
import bannerMain from '../assets/banner-main.png'; 

import './Navbar.css';

export default function Navbar({ handeMoneyIncrease, increaseMoney, forAdd}) {
  return (
    <>
      {/* Navbar section starts here */}
      <div className="nav-bar">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <p>{increaseMoney} BDT</p>
      </div>
      {/* Navbar section ends here */}

      {/* Banner section starts here */}
      <div className="banner-section">
        <img src={bannerMain} alt="Banner" className="banner-image ml-64 " /> 
        <div className="banner-content mt-60">
          <p className="banner-title">Assemble Your Ultimate Dream 11 Cricket Team</p>
          <p className="banner-subtitle">Beyond Boundaries Beyond Limits</p>
        
          <button 
    onClick={forAdd} 
    className="banner-button rounded-lg px-4 py-2 text-gray-950  font-bold transition duration-200 bg-[rgb(231,254,41)] hover:bg-[rgb(190,233,34)]"
>
    Claim Free Credit
</button>



        </div>
      </div>
      {/* Banner section ends here */}
    </>
  );
}

