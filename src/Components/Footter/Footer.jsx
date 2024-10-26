import footerImage from '../assets/logo-footer.png'; 
import './Footer.css';

export default function Footer() {
  return (
    <>
      {/* Footer section starts here */}

      <div className="footer-top w-[800px]   rounded-lg  ml-72 mt-8">
        <h2 className='text-2xl text-slate-700 font-bold'>Subscribe to our Newsletter</h2>
        <p className=' text-slate-700 font-semibold'>Get the latest updates and news right in your inbox!</p>
        <input type="text" placeholder='Enter your email' />
        <button className='font-bold'>Subscribe</button>
      </div>


      <footer className="footer-section  mt-40">
        <img src={footerImage} alt="Footer" className="footer-image" />


        <div className="footer-content">
        <div>
          <h2 className='font-bold'>About Us</h2>
          <p>We are a passionate team dedicated to providing the best <br /> services to our customers.</p>
        </div>

        <div>
          <h2 className='font-bold'>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className='font-bold'>Subscribe</h2>
          <p>Subscribe to our newsletter for the latest updates</p>
          <input type="text" placeholder="Enter Your Mail" />
        </div>
      </div>

      <div className="footer-bottom">
        <p className='font-bold'>© 2024 Your Company Name. All rights reserved.</p>
      </div>
      {/* Footer section ends here */}

      </footer>

     
    </>
  );
}
