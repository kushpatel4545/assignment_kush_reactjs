import React from 'react';


const GoogleProductList = ({ addToCart }) => {

  const products = [
    { id: 1, name: 'Google Pixel 8 Pro', description: 'Built with Pixel  most advanced chip and Google AI to help you do more effortlessly.', image: 'pixel8image.jpg', price: 699 },
    { id: 2, name: 'Google Pixel 8', description: 'The new Google Tensor G3 chip is custom-designed with Google AI for cutting-edge photo and video features and smarter ways to help throughout the day. And it makes Pixel 8 fast and efficient.', image: 'Pixel8proimage.jpg', price: 549 },
    { id: 3, name: 'Google pixel watch 2', description: 'Personalized help for your health, safety, and productivity.', image: 'pixelwatch2.jpg', price: 359 },
    { id: 4, name: 'Google pixel buds pro ', description: 'With immersive audio, clearer calls and more, they are the perfect earbuds for Pixel.8', image: 'googlebuds.jpg', price: 259 },
    { id: 5, name: 'Google chromebook', description: 'Cloud gaming Chromebooks come with high resolution screens that offer crystal clear visuals for gaming and more. The 120Hz refresh rate enables high FPS gameplay on NVIDIA GeForce NOW, so you do not miss a millisecond of action.', image: 'chromebook.jpg', price: 1599 },
    { id: 6, name: 'Google charger', description: '2-coil wireless charging stand (portrait/landscape) for smartphones, and single-coil non slip charging pad for Qi Charging Wireless Head Phones.', image: 'googlecharger.jpg', price: 35 }

  ];

  return (
    <div className="container">
      <h1 className='heading'>Google Product List</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <span className="price">$ {product.price}</span>
                <input type="number" className="form-control" defaultValue={1} min={1} />

                <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleProductList;