import React from 'react';
import appGoogle from '../../../images/google_play.png';
import appIos from '../../../images/ios_store.png';
import appRb from '../../../images/apps_rb.png';

import './footer.css';

function Footer() {
	return (
    <div>
		<div className="footer-play">
          <div className="footer-container contenedor">
            <div>
              <li className="uppercase">Acerca del Ofertón</li>
              <li>¿Quiénes Somos?</li>
              <li>Responsabilidad Social</li>
              <li>Ventas Corporativas</li>                                          
            </div>
            <div>
              <li className="uppercase">Servicio al cliente</li>
              <li>Preguntas Frecuentes</li>
              <li>Haz tu primera compra en el Ofertón</li>
              <li>Aviso de Privacidad</li>  
            </div>
            <div>
              <li className="uppercase">El Ofertón cerca de ti</li>
              <li>Colombia</li>
              <li>Ciudades</li> 
            </div>
            <div>
              <li className="uppercase">Descargue la APP gratis</li>
              <div className="stores">
                <div className="apps-promo">
                  <li>
                    <img src={appIos}/>
                  </li>
                  <li>
                    <img src={appGoogle}/>
                  </li>
                </div>
                <img src={appRb}/>
              </div>
            </div>
          </div>
		</div>
        <div className="banner-footer">
          <div>
            <li>Copyright © 2006-2018 El Ofertón</li>
          </div>
        </div>
    </div>
	)
}

export default Footer;