import WaffleCone from '../assets/Cones/waffle-cone.png'
import CakeCone from '../assets/Cones/cake-cone.png'
import SugarCone from '../assets/Cones/sugar-cone.png'
import KidsCone from '../assets/Cones/kid-cone.png'
import GlutenFreeCone from '../assets/Cones/gf-cone.png'

export default function HorizontalScroll() {
  return (
    <div>
      <h1 style={{ marginTop: "17px", marginBottom: "7px" }}>Cones</h1>
      <div className="horizontal-container">
        <div style={{ marginLeft: "10px" }} className='cone-container'>
          <div className="image-container">
            <img src={WaffleCone} alt="waffle cone" className="cone" />
          </div>
          <div className='caption'>Waffle <br></br> Cone</div>
        </div>

        <div className='cone-container'>
          <div className="image-container">
            <img src={CakeCone} alt="cake cone" className="cone" />
          </div>
          <div className='caption'>Cake  <br></br> Cone</div>
        </div>

        <div className='cone-container'>
          <div className="image-container">
            <img src={SugarCone} alt="sugar cone" className="cone" />
          </div>
          <div className='caption'>Sugar  <br></br> Cone</div>
        </div>

        <div className='cone-container'>
          <div className="image-container">
            <img src={KidsCone} alt="Kid's Cone" className="cone" />
          </div>
          <div className='caption'>Kid's  <br></br> Cone</div>
        </div>

        <div style={{ marginRight: "10px" }} className='cone-container'>
          <div className="image-container">
            <img src={GlutenFreeCone} alt="Gluten-Free Cone" className="cone" />
          </div>
          <div className='caption'>Gluten Free  <br></br> Cone</div>
        </div>

      </div>
    </div>
  )
}



