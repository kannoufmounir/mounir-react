import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import './Nav.css'



function FOOTER(props) {
  return (

    <NavLink>


      {/* <!-- FOOTER START --> */}
      <div class="footer">
     
        <div class="contain">
        
         
                
          <div class="col">
         
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>

            </ul>
          </div>
          <div class="col">
            <h1>Products</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>

              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="col">
            <h1>Accounts</h1>
            <ul>
              <li>About</li>

              <li>Services</li>
              <li>Social</li>

            </ul>
          </div>

          <div class="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>
          <div class="col social">
            <h1>Email</h1>
            <ul>
            <input type="text" className='Fotemail' placeholder="Email" />
              
            </ul>
            <div>
            
              
            </div>
          </div>
        </div>
       

      </div>


      
                    
               



    </NavLink>







  );
}

export default FOOTER;