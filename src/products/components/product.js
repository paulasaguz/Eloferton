import React from 'react';
import ProductRender from './productRender.js'
import './products.css';

function Product(props) {
	return (
		<div className="producto">
		{
			props.products.map((item) => {
				return (
          <ProductRender
          	key={item.id}
				    {...item}
          />
				)
			})
		}
		</div>
	)
}
export default Product;