import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'



const Product = (props) => {

  const {addToCart}=props;
  const { img,name,price } = props.product;
  return (
    <div className='col-lg-4 col-md-6 col  p-3'>
      <div className="card  h-100"  >
  <img className='h-75' src={img} alt="" />
  <div className="card-body">
          <h3 className="card-title">{ name}</h3>
          <h5 className="card-text mt-3">Price: $ { price}</h5>
          <button onClick={()=>addToCart(props.product)} className="btn btn-primary px-5 mt-3 ">Add to cart  <FontAwesomeIcon className='ms-2'  icon={faShoppingCart} /></button>
          
  </div>
</div>
    </div>
  );
};

export default Product;