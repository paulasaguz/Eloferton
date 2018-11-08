import React from 'react';
import './header.css';

function Header() {
	return (
		<div className="header">
          <div className="contenedor content">
            <h3>El ofertón</h3>
            <input type="text" placeholder="Busca un producto"></input>
            <p>Ingresar</p>
            <p>Registrase</p>
            <p>Canasta</p>
          </div>
		</div>
	)
}

export default Header;