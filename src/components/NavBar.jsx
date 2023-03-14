import React from "react";
import Moo from "../assets/Icons/Moo-51.svg";
import HamburgerIcon from "../assets/Icons/HamburgerLight.svg";
import UserIconLight from "../assets/Icons/UserVector.svg";
import ShoppingCart from "../assets/Icons/CartVector.svg";
import LightToggleIcon from "../assets/Icons/LightToggle.svg";

function NavBar() {
  return (
    <div className="NavBarRectangle-17">
      <div className="NavBarRectangle-16">
            <div className="Moo-ChaCha Logo-Text-Style">
              <span className="logo-text">Moo</span>
              <img src={Moo} alt="" />
              <span className="logo-text">ChaCha</span>
            </div>
        <div className="LightDarkButtonBackground">
          <div className="LightDarkButtonKnob">
            {/* <div className="LightToggleIcon"></div> */}
            <img src={LightToggleIcon} alt="" />
            <div className="DarkToggleIcon"></div>

          </div>
        </div>
      </div>

      <div className="NavBarRectangle-15">
        <div className="HamburgerLight">
          <img
            src={HamburgerIcon}
            alt="Hamburger Icon"
            width="30"
            height="22"
          />
        </div>
        <div className="UserIconLight">
          <img src={UserIconLight} alt="User Icon" className="icon" />
        </div>
        <div className="ShoppingCartLight">
          <img
            src={ShoppingCart}
            alt="Shoping Cart Icon"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
