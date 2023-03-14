import { useState } from 'react';

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
    <div className="footer dark-mode">
      <div className="Moo-ChaCha Logo-Text-Style dark-mode">
        <span>Moo</span><img src={Moo} alt="" /><span>ChaCha</span>
      </div>
      <a className="dark-mode" href="/flavors/milk">Milk</a>
      <a className="dark-mode" href="/flavors/vegan">Vegan</a>
      <a className="dark-mode" href="/flavors/sorbet">Sorbet</a>
      <br></br>
      <br></br>
      <a className="dark-mode" href="/fAQ">FAQ</a>
      <a className="dark-mode" href="/story">Our Story</a>
      <a className="dark-mode" href="/contact">Contact Us</a>
      <a className="dark-mode" href="/jobs">Join the Team</a>
      <a className="dark-mode" href="/locations">Our Locations</a>
      <div>
        {/* <span className='social-logos'></span>
        <span className='social-logos'></span>
        <span className='social-logos'></span>
        <span className='social-logos'></span> */}
        <img src={mode === 'light' ? instaLight : instaDark} alt="insta logo" className="social-logos" />
        <img src={mode === 'light' ? facebookLight : facebookDark} alt="facebook logo" className="social-logos" />
        <img src={mode === 'light' ? twitterLight : twitterDark} alt="twitter logo" className="social-logos" />
        <img src={mode === 'light' ? tiktokLight : tiktokDark} alt="tiktok logo" className="social-logos" />
      </div>
    </div>
  )

}