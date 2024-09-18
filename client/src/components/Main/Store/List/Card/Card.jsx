import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../../../../redux';

const Card = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartItems);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(items.some(item => item.id === props.product.id));
  }, [items, props.product.id]);

  const handleAddToCart = () => {
    if (!isAdded){
      dispatch(addToCart(props.product));
      setIsAdded(true);
    }
  };

  return (
    <div>
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={props.product.image}
            alt=""
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link to={`/product/${props.product.id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {props.product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Relevance: {props.product.relevance}</p>
            <p className="mt-1 text-sm text-gray-500">Publisher: {props.product.publisher}</p>
            <p className="mt-1 text-sm text-gray-500">Distributor: {props.product.distributor.distributor_name}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{props.product.price}€</p>
        </div>
        <div>
        </div>
      </div>
      <div className="mt-4">
        <Link to={`/product/${props.product.id}`}>
          <button className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-2 transition-colors duration-300">More Info</button>
        </Link>
        <button onClick={handleAddToCart} className={`bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-300 ${isAdded ? 'bg-green-500' : ''}`}>
          {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
      </div>  
    </div>
  );
};

export default Card;







// import React from "react";
// import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { addToCart } from '../../../../../redux'

// const Card = (props) => {
//   const dispatch = useDispatch()
//   return <article>
//     <img src={props.product.image} alt="" />
//     <p>ID: {props.product.id} Nombre: {props.product.name} Precio: {props.product.price} Relevancia: {props.product.relevance} Manufacturer: {props.product.distributor.distributor_name} </p>
//     <Link to={`/product/${props.product.id}`}>
//     <button>More Info</button>
//     </Link>
//     <button onClick={()=>dispatch(addToCart(props.product))}>Add to cart</button>
//     </article>;
// };

// export default Card;
