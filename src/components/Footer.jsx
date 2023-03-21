import Moo from '../assets/Icons/Moo-5 1.svg';
import facebookLight from '../assets/Icons/facebook-logo-light.svg';
import instaLight from '../assets/Icons/insta-logo-light.svg';
import tiktokLight from '../assets/Icons/tiktok-logo-light.svg';
import twitterLight from '../assets/Icons/twitter-logo-light.svg';
import facebookDark from '../assets/Icons/facebook-logo-dark.svg'
import instaDark from '../assets/Icons/insta-logo-dark.svg';
import tiktokDark from '../assets/Icons/tiktok-logo-dark.svg';
import twitterDark from '../assets/Icons/twitter-logo-dark.svg';

export default function Footer({ mode }) {

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
        <img src={mode === 'light' ? instaLight : instaDark} alt="insta logo" className="social-logos" />
        <img src={mode === 'light' ? facebookLight : facebookDark} alt="facebook logo" className="social-logos" />
        <img src={mode === 'light' ? twitterLight : twitterDark} alt="twitter logo" className="social-logos" />
        <img src={mode === 'light' ? tiktokLight : tiktokDark} alt="tiktok logo" className="social-logos" />
      </div>
    </div>
  )

}