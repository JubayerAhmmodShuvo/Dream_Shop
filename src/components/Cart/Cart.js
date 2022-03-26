import React from 'react';

const Cart = ({ cart,chooseAgain,chooseOne }) => {
  
 
 
  return (
    <div className="p-3 mt-3 sticky-top">
      <h3 className='pb-3'>Selected Products</h3>
      <div>
        {cart.map((item) => (
          <div className="mt-4 d-flex" key={item.id}>
            <h5 className=' text-start fw-bold bg-dark text-light py-3 px-1 rounded'> <img className='w-25 rounded-circle me-lg-2 me-3 ms-1' src={ item.img} alt="" /> {item.name}</h5>
          </div>
          
        
        ))}
       
      </div >
      <div className="">
          <button onClick={ ()=>chooseOne(cart)} type="button" className="btn btn-outline-success mt-5 mb-3 w-75">Choose 1 For Me</button> <br />
      <button onClick={ ()=>chooseAgain(cart)} type="button" className="btn btn-outline-info mt-3 mb-5 w-75">Choose Again</button>
    </div>
     
    </div>
  );
};

export default Cart;