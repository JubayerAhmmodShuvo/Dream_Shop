import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart,setCart]=useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  },[])


  return (
    <div className="container-fluid">
       <div className="row justify-content-between ">
      <div className="col-lg-10 col-sm-12  ">
          <div className="row">
            {
              products.map(product => <Product
                product={product}
                key={product.id}
              
              />)
              }
              
        </div>
      </div>
      <div className="col-lg-2 col-sm-12 bg-primary ">
       <Cart />
      </div>
      

    </div>
   </div>
  );
};

export default Shop;