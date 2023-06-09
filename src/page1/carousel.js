
import React from "react";
import '../Nav.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';



function carousel() {
   
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },


    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    
    <div className="App">
      <Carousel responsive={responsive}>
        <div className='img-produ'>
        <div className='box-L'>
          <img className='product-image' src={image1} alt="" />
         
            <h1>Tommy Hilfiger </h1>
            <h3>à partir de € 118,96 TVA incluse</h3>
            <p>MODERN MIX RUNNER - Baskets basses</p>
            <button className='btn_34'> Ajouter au panier </button>
          </div>
        </div>
        <div className='img-produ'>
        <div className='box-L'>
          <img className='product-image' src={image2} alt="" />
          
            <h1>Tommy Hilfiger </h1>
            <h3>€ 47,95 TVA incluse</h3>
            <p>CORE LIGHTWEIGHT - Baskets basses</p>
            <button className='btn_34'> Ajouter au panier </button>
          </div>
        </div>
        <div className='img-produ'>
        <div className='box-L'>
          <img className='product-image' src={image3} alt="" />
          
            <h1>Tommy Hilfiger </h1>
            <h3>€ 77,93 TVA incluse</h3>
            <p>RETRO COURT CUPSOLE STRIPES - Baskets</p>
            <button className='btn_34'> Ajouter au panier </button>
          </div>
        </div>
        <div className='img-produ'>
        <div className='box-L'>
          <img className='product-image' src={image4} alt="" />
          
            <h1>Tommy Hilfiger </h1>
            <h3>€ 69,95 TVA incluse</h3>
            <p>ICONIC LOGO - Baskets basses</p>
            <button className='btn_34'> Ajouter au panier </button>
          </div>
        </div>

        <div className='img-produ'>
        <div className='box-L'>
          <img className='product-image' src={image5} alt="" />
       
            <h1>Tommy Hilfiger </h1>
            <h3>€ 98,96 TVA incluse</h3>
            <p>ICONIC RUNNER - Baskets basses</p>
            <button className='btn_34'> Ajouter au panier </button>
          </div>
        </div>
      </Carousel>

    </div>
  );
}

export default carousel;
