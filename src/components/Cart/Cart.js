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
      <button type="button" className="btn btn-outline-success mt-5">Choose 1 For Me</button> <br />
      <button type="button" className="btn btn-outline-info mt-3">Choose Again</button>
     
    </div>
  );
};

export default Cart;