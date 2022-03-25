import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
  return (
    <div className="container-fluid">
       <div className="row justify-content-between ">
      <div className="col-md-10 col-sm-12  ">
          <div className="row ">
           
              <Product />
              <Product />
              <Product />
              <Product />
              
        </div>
      </div>
      <div className="col-md-2 col-sm-12 bg-primary p-5">
       <Cart />
      </div>
      

    </div>
   </div>
  );
};

export default Shop;