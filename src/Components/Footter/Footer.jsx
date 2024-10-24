import footerImage from '../assets/logo-footer.png'; 
import './Footer.css';

export default function Footer() {
  return (
    <>
      {/* Footer section starts here */}

      <div className="footer-top mt-36">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest updates and news right in your inbox!</p>
        <input type="text" placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>


      <footer className="footer-section mt-20">
        <img src={footerImage} alt="Footer" className="footer-image" />


        <div className="footer-content">
        <div>
          <h2>About Us</h2>
          <p>We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2>Subscribe</h2>
          <p>Subscribe to our newsletter for the latest updates</p>
          <input type="text" placeholder="Enter Your Mail" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
      {/* Footer section ends here */}

      </footer>

     
    </>
  );
}
