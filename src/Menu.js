import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './Nav.css'



function Menu(props) {
    return (

        <div className='OPM'>

            <ul >
                <NavLink className="nav-link" to='/'>
                    <li className='logoRO' >MK </li>
                </NavLink>

                <NavLink className="nav-link  " to='/'>
                    <li>Accueil</li>
                </NavLink>

                <NavLink className="nav-link " to='/Produit'>
                    <li>Produit</li>
                </NavLink>
                <NavLink className="nav-link " to='/Picker'>
                    <li>Calendrier</li>
                </NavLink>


                <NavLink className="nav-link " to='/bootsatrap'>
                    <li>Bootsatrap</li>
                </NavLink>
                <NavLink className="nav-link " to='/calculatrice'>
                    <li>Calculator</li>
                </NavLink>


                <NavLink className="nav-link " to='/MAP'>
                    <li>Meteo</li>
                </NavLink>

                <NavLink className="nav-link " to='/devise'>
                    <li>DEVIS</li>
                </NavLink>

                <NavLink className="nav-link " to='/video'>
                    <li>Video</li>
                </NavLink>





                <NavLink className="nav-link  " to='/login'>
                    <li className='loginKJ'>Login</li>
                </NavLink>
                <NavLink className="nav-link " to='/inscripation'>
                    <li className='loginKZ'>Inscripation</li>
                </NavLink>





            </ul>

        </div>


    );
}

export default Menu;