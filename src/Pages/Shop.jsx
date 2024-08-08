import { useContext } from 'react';
import React from 'react';
import products from '../Components/Products';
import { CartContext } from '../Components/ContexFile';

function Shop() {
  const phoneProducts = products.filter(product => product.category === 'phone');
  const mansWearProducts = products.filter(product => product.category === 'mans wear');
  const gymProducts = products.filter(product => product.category === 'gym');

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="container p-10 mx-auto space-y-10">
        <div className="space-y-3">
          <h1 className="inline-block p-2 text-lg text-white uppercase bg-black rounded-xl">Phones</h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:grid-cols-3 place-content-center">
            {phoneProducts.map(product => (
              <div className="flex flex-col items-center justify-between p-4 transition-all duration-300 rounded-lg shadow-md shadow-black hover:scale-105" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2 className="capitalize">{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button
                  className="px-2 py-1 mt-3 text-white bg-black rounded-lg hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="space-y-3">
          <h1 className="inline-block p-2 text-lg text-white uppercase bg-black rounded-xl">Mans Wear</h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:grid-cols-3 place-content-center">
            {mansWearProducts.map(product => (
              <div className="flex flex-col items-center justify-between p-4 transition-all duration-300 rounded-lg shadow-md shadow-black hover:scale-105" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2 className="capitalize">{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button
                  className="px-2 py-1 mt-3 text-white bg-black rounded-lg hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="space-y-3">
          <h1 className="inline-block p-2 text-lg text-white uppercase bg-black rounded-xl">Gym</h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 md:grid-cols-3 place-content-center">
            {gymProducts.map(product => (
              <div className="flex flex-col items-center justify-between p-4 transition-all duration-300 rounded-lg shadow-md shadow-black hover:scale-105" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2 className="capitalize">{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button
                  className="px-2 py-1 mt-3 text-white bg-black rounded-lg hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
