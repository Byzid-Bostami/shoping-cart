import React, { useContext } from 'react';
import { CartContext } from '../Components/ContexFile';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <div>
      
      <div className="container p-10 mx-auto space-y-10">

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:grid-cols-3 place-content-center">
        {cart.map((item) => (
          <div className="flex flex-col items-center justify-between p-4 transition-all duration-300 rounded-lg shadow-md shadow-black hover:scale-105" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3 className="capitalize">{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>
              Quantity: 
              <button
               onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 text-white bg-black rounded-md hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black">-</button>

              <p className="inline-block px-2 py-1 mt-3 text-white bg-black rounded-lg">{item.quantity}</p>

              <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}  className="p-1 text-white bg-black rounded-md hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black">+</button>
            </p>
            <button onClick={() => removeFromCart(item.id)}  className="px-2 py-1 mt-3 text-white bg-black rounded-lg hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black">Remove</button>          </div>
        ))}
      </div>
      
        
      {cart.length > 0 && (
        <div className="flex flex-row justify-center space-x-10">
          <h2 className="px-2 py-1 text-white bg-black rounded-lg">Total: ${total}</h2>
          <button className="px-2 py-1 text-white transition-all duration-200 bg-black rounded-lg hover:text-black hover:bg-white hover:shadow-sm hover:shadow-black" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}

      {cart.length == 0 && (<p className="text-4xl font-medium text-center ">NO ITEM ON CART</p>)}

      </div>

    </div>
  );
};

export default Cart;
