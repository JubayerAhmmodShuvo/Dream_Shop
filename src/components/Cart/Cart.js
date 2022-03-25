import React from 'react';

const Cart = ({ cart }) => {
  
 
 
  return (
    <div className="p-3 mt-3 sticky-top">
      <h3 className='pb-3'>Selected Products</h3>
      <div>
        {cart.map((item) => (
          <div className="mt-4" key={item.id}>
            <h4 className=' text-start'>{item.name}</h4>
          </div>
          
        
        ))}
       
      </div>
     
    </div>
  );
};

export default Cart;