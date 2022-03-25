import React from 'react';

const Product = (props) => {
  const { img,name,price } = props.product;
  return (
    <div className='col-lg-4 col-md-6 col  p-3'>
      <div className="card  h-100"  >
  <img className='h-75' src={img} alt="" />
  <div className="card-body">
          <h3 className="card-title">{ name}</h3>
          <h5 className="card-text">Price: $ { price}</h5>
   <button className="btn btn-primary px-5">Add to cart</button>
  </div>
</div>
    </div>
  );
};

export default Product;