import Moo from '../assets/Icons/Moo-5 1.svg';
import facebook from '../assets/Icons/facebook-logo.svg';
import insta from '../assets/Icons/insta-logo.svg';
import tiktok from '../assets/Icons/tiktok-logo.svg';
import twitter from '../assets/Icons/twitter-logo.svg';

export default function Footer() {

  return (
    <div className="footer">
      <div className="Moo-ChaCha Logo-Text-Style">
        <span>Moo</span><img src={Moo} alt="" /><span>ChaCha</span>
      </div>
      <a href="/flavors/milk">Milk</a>
      <a href="/flavors/vegan">Vegan</a>
      <a href="/flavors/sorbet">Sorbet</a>
      <br></br>
      <br></br>
      <a href="/fAQ">FAQ</a>
      <a href="/story">Our Story</a>
      <a href="/contact">Contact Us</a>
      <a href="/jobs">Join the Team</a>
      <a href="/locations">Our Locations</a>
      <div>
        <img src={insta} alt="insta logo" className="social-logos" />
        <img src={facebook} alt="facebook logo" className="social-logos" />
        <img src={twitter} alt="twitter logo" className="social-logos" />
        <img src={tiktok} alt="tiktok logo" className="social-logos" />
      </div>
    </div>
  )

}