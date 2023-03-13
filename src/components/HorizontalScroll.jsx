import WaffleCone from '../assets/Cones/0E463B38-D674-475D-9BD1-D56D1CCB1664_4_5005_c.jpeg'
import CakeCone from '../assets/Cones/3D907414-AA2B-4CA7-A0E8-0B43E47141BD_4_5005_c.jpeg'
import SugarCone from '../assets/Cones/9CE92187-926D-4B75-91F2-62E00A8A3B2A_4_5005_c.jpeg'
import KidsCone from '../assets/Cones/C0EB7A7C-D534-4AB8-979C-B83D5170EFB8_4_5005_c.jpeg'
import GlutenFreeCone from '../assets/Cones/DE2862C8-6D7A-4AB6-BEB9-083F06770E0E_4_5005_c.jpeg'

export default function HorizontalScroll() {
  return (
    <div className="horizontal-container">

      <div className='cone-container'>
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

      <div className='cone-container'>
        <div className="image-container">
          <img src={GlutenFreeCone} alt="Gluten-Free Cone" className="cone" />
        </div>
        <div className='caption'>Gluten Free  <br></br> Cone</div>
      </div>

    </div>
  )

}



