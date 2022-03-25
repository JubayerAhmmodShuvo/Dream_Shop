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
  }, [])
  
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  }


  return (
    <div className="container-fluid">
       <div className="row justify-content-between ">
      <div className="col-lg-10 col-sm-12  ">
          <div className="row">
            {
              products.map(product => <Product
                product={product}
                key={product.id}
                addToCart={addToCart}
              
              />)
              }
              
        </div>
      </div>
      <div className="col-lg-2 col-sm-12 mt-3 rounded bg-success  ">
          <Cart cart={cart} />
      </div>
      

    </div>
   </div>
  );
};

export default Shop;