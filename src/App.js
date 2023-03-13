import HorizontalScroll from './components/HorizontalScroll'
import Card from './components/Card'
import './App.css';

import Seasonal from './assets/Flavors/Black-Cherry-Chip_TUBSHOT-1.jpeg'
import Milk from './assets/Flavors/EarlGreyTea_TubShot-3-1.jpg'
import New from './assets/Flavors/Peanut-Butter-Brownie-Chip-Tubshot-1-1.jpg'
import Popular from './assets/Flavors/Pistachio_Tubshot-2-1.jpg'
import Sorbet from './assets/Flavors/Sorbet_icecream.jpg'
import Vegan from './assets/Flavors/toastedsmore_icecream.jpg'

import Sprinkles from './assets/Toppings/1316219ad0a2d72ec726b66964d84082.jpg'
import Oreos from './assets/Toppings/An Extraminty Oreo.jpg'
import Chocolate from './assets/Toppings/Dairy-free Sugar-free Homemade Chocolate Chips _ Whole New Mom.jpg'
import Gummies from './assets/Toppings/gummies3__06290.jpg'
import Caramel from './assets/Toppings/istockphoto-1090251858-612x612.jpg'
import Cherries from './assets/Toppings/maraschino_cherries-E127.jpg'

function App() {

  const flavors = {
    title: "Flavors",
    options: [
      {
        name: "Milk",
        text: "100% Moo Milk",
        img: { Milk }
      },
      {
        name: "Vegan",
        text: "100% No Milk",
        img: { Vegan }
      },
      {
        name: "Sorbet",
        text: "Flavorful & Fruity",
        img: { Sorbet }
      },
      {
        name: "New",
        text: "Do you dare?",
        img: { New }
      },
      {
        name: "Popular",
        text: "Our MVPs",
        img: { Popular }
      },
      {
        name: "Seasonal",
        text: "Spring Fever",
        img: { Seasonal }
      }
    ]
  }

  const toppings = {
    title: "Toppings",
    options: [
      {
        name: "Sprinkles",
        text: "or Jimmies",
        img: { Sprinkles }
      },
      {
        name: "Chocolate",
        text: "Pieces or chunks",
        img: { Chocolate }
      },
      {
        name: "Cherries",
        text: "Fresh or Frozen",
        img: { Cherries }
      },
      {
        name: "Oreo",
        text: "Bits or Crumbs",
        img: { Oreos }
      },
      {
        name: "Caramel",
        text: "or Chocolate",
        img: { Caramel }
      },
      {
        name: "Gummies",
        text: "Tasty & Colorful",
        img: { Gummies }
      }
    ]

  }
  return (
    <div className="App">
      <Card details={flavors} />
      <HorizontalScroll />
      <Card details={toppings} />
    </div>
  );
}

export default App;
