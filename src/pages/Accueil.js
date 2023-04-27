import React from 'react';
import Menu from '../Menu';
import Carousel from '../page1/carousel';
import FOOTER from '../Footre';
import '../Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Accueil(props) {
  return (




    <div >

      <Menu />


      <div className='Infoheade'>

        <h4>btenez un crédit de 50 € à 100 € sur l’achat d’un Tommy Hilfige ICONIC LOGO ou Tommy Hilfige RETRO COURT CUPSOLE STRIPES LOGO Acheter un Tommy Hilfige <a href='.'> Achter</a> </h4>

      </div>
      <Carousel />

      <div class="imageAceuil">


        <a href="" class="main-btn">Home </a>
        <a href="" class="main-btn">Femme </a>
        <a href="" class="main-btn">bebe  </a>
        <div>
        </div>
      </div>








      <FOOTER />

    </div>

  );

}

export default Accueil;