import HorizontalScroll from "./components/HorizontalScroll";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";
import Carousel from "./components/Carousel";

import React, { useState, useEffect } from "react";

import Moo from "./assets/Icons/Moo-51.svg";
import HamburgerIcon from "./assets/Icons/HamburgerLight.svg";
import UserIconLight from "./assets/Icons/UserVector.svg";
import ShoppingCart from "./assets/Icons/CartVector.svg";
import UserIconDark from "./assets/Icons/UserVectorDark1.svg";
import ShoppingCartDark from "./assets/Icons/ShoppingCartDark.svg";
import HamburgerDark from "./assets/Icons/HamburgerDark.svg";

import HeroMilk from "./assets/milk.jpg";

import Seasonal from "./assets/Flavors/Black-Cherry-Chip_TUBSHOT-1.jpeg";
import Milk from "./assets/Flavors/EarlGreyTea_TubShot-3-1.jpg";
import New from "./assets/Flavors/Peanut-Butter-Brownie-Chip-Tubshot-1-1.jpg";
import Popular from "./assets/Flavors/Pistachio_Tubshot-2-1.jpg";
import Sorbet from "./assets/Flavors/Sorbet_icecream.jpg";
import Vegan from "./assets/Flavors/toastedsmore_icecream.jpg";

import Sprinkles from "./assets/Toppings/1316219ad0a2d72ec726b66964d84082.jpg";
import Oreos from "./assets/Toppings/An Extraminty Oreo.jpg";
import Chocolate from "./assets/Toppings/Dairy-free Sugar-free Homemade Chocolate Chips _ Whole New Mom.jpg";
import Gummies from "./assets/Toppings/gummies3__06290.jpg";
import Caramel from "./assets/Toppings/istockphoto-1090251858-612x612.jpg";
import Cherries from "./assets/Toppings/maraschino_cherries-E127.jpg";

function App() {
  const [state, setState] = useState("light");

  const body = document.querySelector("body");

  function handleClick(event) {
    if (state === "light") {
      setState("dark");
    } else {
      setState("light");
    }
  }

  useEffect(() => {
    if (state === undefined) {
      return;
    } else if (state === "light") {
      body.classList.remove("dark");
    } else {
      body.classList.add("dark");
    }
  }, [state]);

  const flavors = {
    title: "Flavors",
    options: [
      {
        name: "Milk",
        text: "100% Moo Milk",
        img: { Milk },
      },
      {
        name: "Vegan",
        text: "100% No Milk",
        img: { Vegan },
      },
      {
        name: "Sorbet",
        text: "Flavorful & Fruity",
        img: { Sorbet },
      },
      {
        name: "New",
        text: "Do you dare?",
        img: { New },
      },
      {
        name: "Popular",
        text: "Our MVPs",
        img: { Popular },
      },
      {
        name: "Seasonal",
        text: "Spring Fever",
        img: { Seasonal },
      },
    ],
  };

  const toppings = {
    title: "Toppings",
    options: [
      {
        name: "Sprinkles",
        text: "or Jimmies",
        img: { Sprinkles },
      },
      {
        name: "Chocolate",
        text: "Pieces or chunks",
        img: { Chocolate },
      },
      {
        name: "Cherries",
        text: "Fresh or Frozen",
        img: { Cherries },
      },
      {
        name: "Oreo",
        text: "Bits or Crumbs",
        img: { Oreos },
      },
      {
        name: "Caramel",
        text: "or Chocolate",
        img: { Caramel },
      },
      {
        name: "Gummies",
        text: "Tasty & Colorful",
        img: { Gummies },
      },
    ],
  };
  return (
    <div className="App">
      <div className="NavBarRectangle-17">
        <div className="NavBarRectangle-16">
          <div className="Moo-ChaCha Logo-Text-Style">
            <span className="logo-text">Moo</span>
            <img src={Moo} alt="" />
            <span className="logo-text">ChaCha</span>
          </div>
          <div onClick={handleClick} class="toggle-container">
            <span className="moon">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="moon-path"
                  d="M10.915 9.14941C7.3877 9.14941 5.19336 7.03711 5.19336 3.61914C5.19336 2.66211 5.35059 1.78711 5.60352 1.30859C5.72656 1.06934 5.76758 0.905273 5.76758 0.720703C5.76758 0.392578 5.50781 0.0712891 5.11133 0.0712891C5.00879 0.0712891 4.83105 0.105469 4.60547 0.194336C2.00781 1.24707 0.223633 3.92676 0.223633 6.8252C0.223633 10.9951 3.25879 14.0371 7.42871 14.0371C10.3887 14.0371 12.8564 12.4375 13.9844 9.85352C14.0869 9.62109 14.1211 9.42285 14.1211 9.29297C14.1211 8.91016 13.8408 8.6709 13.5195 8.6709C13.3555 8.6709 13.1982 8.69824 12.9727 8.80078C12.4668 9.0127 11.6807 9.14941 10.915 9.14941ZM1.7207 6.79102C1.7207 4.98633 2.60254 3.21582 4.05176 2.17676C3.89453 2.67578 3.80566 3.22266 3.80566 3.82422C3.80566 7.9873 6.38281 10.5098 10.6416 10.5098C11.1475 10.5098 11.585 10.4551 11.9951 10.3115C11.0312 11.7129 9.30859 12.54 7.46289 12.54C4.14746 12.54 1.7207 10.1133 1.7207 6.79102Z"
                />
                <defs>
                  <linearGradient
                    id="dark-gradient"
                    x1="-2.5"
                    y1="9"
                    x2="18.5"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF00B8" />
                    <stop offset="1" stop-color="#FFB800" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="sun">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="sun-path"
                  d="M7.98242 3.18359C8.39258 3.18359 8.73438 2.8418 8.73438 2.43164V1.04395C8.73438 0.640625 8.39258 0.291992 7.98242 0.291992C7.57227 0.291992 7.23047 0.640625 7.23047 1.04395V2.43164C7.23047 2.8418 7.57227 3.18359 7.98242 3.18359ZM11.4346 4.63281C11.7217 4.91309 12.2002 4.91309 12.4941 4.62598L13.4785 3.6416C13.7588 3.35449 13.7588 2.8623 13.4717 2.5752C13.1846 2.29492 12.6992 2.29492 12.4121 2.58203L11.4277 3.57324C11.1406 3.85352 11.1475 4.33887 11.4346 4.63281ZM4.53027 4.63281C4.81738 4.3457 4.81738 3.85352 4.54395 3.57324L3.55957 2.58203C3.2793 2.30176 2.78711 2.29492 2.5 2.5752C2.21289 2.8623 2.21289 3.35449 2.48633 3.63477L3.4707 4.62598C3.75781 4.91309 4.24316 4.91309 4.53027 4.63281ZM7.98242 11.7354C9.99219 11.7354 11.6533 10.0742 11.6533 8.06445C11.6533 6.04785 9.99219 4.38672 7.98242 4.38672C5.97266 4.38672 4.31152 6.04785 4.31152 8.06445C4.31152 10.0742 5.97266 11.7354 7.98242 11.7354ZM7.98242 10.2998C6.75879 10.2998 5.74707 9.28125 5.74707 8.06445C5.74707 6.84082 6.75879 5.8291 7.98242 5.8291C9.19922 5.8291 10.2178 6.84082 10.2178 8.06445C10.2178 9.28125 9.19922 10.2998 7.98242 10.2998ZM12.8633 8.06445C12.8633 8.47461 13.2051 8.81641 13.6152 8.81641H14.9961C15.3994 8.81641 15.748 8.47461 15.748 8.06445C15.748 7.6543 15.3994 7.3125 14.9961 7.3125H13.6152C13.2051 7.3125 12.8633 7.6543 12.8633 8.06445ZM3.1084 8.06445C3.1084 7.6543 2.75977 7.3125 2.35645 7.3125H0.975586C0.56543 7.3125 0.223633 7.6543 0.223633 8.06445C0.223633 8.47461 0.56543 8.81641 0.975586 8.81641H2.35645C2.75977 8.81641 3.1084 8.47461 3.1084 8.06445ZM11.4277 11.5098C11.1406 11.7969 11.1475 12.2754 11.4346 12.5693L12.4258 13.5537C12.7061 13.8408 13.1914 13.8271 13.4854 13.54C13.7656 13.2598 13.7656 12.7744 13.4785 12.4873L12.4873 11.5029C12.2002 11.2227 11.7148 11.2227 11.4277 11.5098ZM4.54395 11.5098C4.25 11.2227 3.75781 11.2227 3.47754 11.5029L2.49316 12.4805C2.20605 12.7676 2.19922 13.2529 2.47949 13.54C2.7666 13.8271 3.25879 13.834 3.5459 13.5469L4.53027 12.5693C4.81738 12.2754 4.81738 11.7969 4.54395 11.5098ZM7.98242 12.9453C7.57227 12.9453 7.23047 13.2871 7.23047 13.6973V15.0781C7.23047 15.4883 7.57227 15.8301 7.98242 15.8301C8.39258 15.8301 8.73438 15.4883 8.73438 15.0781V13.6973C8.73438 13.2871 8.39258 12.9453 7.98242 12.9453Z"
                  fill="url(#light-gradient)"
                />
                <defs>
                  <linearGradient
                    id="light-gradient"
                    x1="-2.5"
                    y1="9"
                    x2="18.5"
                    y2="9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF00B8" />
                    <stop offset="1" stop-color="#FFB800" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className="knob"></div>
          </div>
        </div>

        <div className="NavBarRectangle-15">
          <div className="HamburgerLight">
            <img
              src={state === "light" ? HamburgerIcon : HamburgerDark}
              alt=""
              className="HamburgerLight"
            />
          </div>

          <div className="icon-container">
            <img
              src={state === "light" ? UserIconLight : UserIconDark}
              alt="User Icon"
              className="icon"
            />
            <img
              src={state === "light" ? ShoppingCart : ShoppingCartDark}
              alt="User Icon"
              className="icon"
            />
          </div>
        </div>
      </div>

      <div className="buffer"></div>
      <Carousel />
      <Card details={flavors} />
      <HorizontalScroll />
      <Card details={toppings} />
      <img
        src={HeroMilk}
        alt="milk"
        style={{ height: "395px", width: "393px" }}
      />
      <Footer mode={state} />
    </div>
  );
}

export default App;
