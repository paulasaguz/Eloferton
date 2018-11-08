import React from 'react';
import './product.css';
import stringToNumber from '../../utils/toStrings.js';

function ProductRender(props) {
  const price = stringToNumber(props.price);
	return (
        <div className="product-container">
          <h3 className="name">{props.name}</h3>
          <p className="precio"> $ {price} </p>
          <p> Cantidad:{props.quantity} <br/>
            Disponible:{props.available} <br/>
            SN:{props.sublevel_id} </p>
          <button className="button">Agregar</button>
        </div>
	)
}

export default ProductRender;
