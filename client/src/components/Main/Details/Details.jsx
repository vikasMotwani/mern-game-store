import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../../redux';
import noGame from '../../../assets/nogame.webp'

import PacManLoader from "react-spinners/PacmanLoader";


const Details = () => {

  const [product, setProduct] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const items = useSelector(state => state.cartItems);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    setIsAdded(items.some(item => item.id === product.id));
  }, [items, product.id]);

  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(addToCart(product));
      setIsAdded(true);
    }
  };



  useEffect(() => {
    const printProduct = async () => {
      const res = await axios.get(`/api/products/${id}`)
      const specificProduct = res.data;
      specificProduct.image = specificProduct.image || noGame;
      setProduct(specificProduct)
    }
    printProduct()
  }
    // eslint-disable-next-line
    , [])




  const goBack = () => navigate(-1)

  let critics = ["900", `${product.relevance > 75 ? "900" : "200"}`, `${product.relevance > 83 ? "900" : "200"}`, `${product.relevance > 90 ? "900" : "200"}`, `${product.relevance > 97 ? "900" : "200"}`]

  const printStars = stars => stars.map(star => {
    return <svg className={`text-gray-${star} h-5 w-5 flex-shrink-0`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" key={uuidv4()}>
      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
    </svg>
  })

  return <>
    {product.distributor ? <div className="bg-white">
      <div className="pt-6">


        {/* <!-- Image gallery --> */}
        <div class="flex justify-center items-center lg:justify-start lg:pl-10">
          <button class="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-300" onClick={goBack}>&lt; Back</button>
        </div>


        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img src={product.image} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
          </div>
        </div>

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* <!-- Product price --> */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price} €</p>

            {/* <!-- Reviews --> */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                  {printStars(critics)}
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <span className="ml-3 text-sm font-medium text-green-500 hover:text-green-500">117 reviews</span>
              </div>
            </div>

            <div className="mt-10">


              <button onClick={handleAddToCart} className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 py-3 px-8 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-colors duration-300 ${isAdded ? 'bg-green-500' : ''}`}>{isAdded ? 'Added!' : 'Add to Cart'}</button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* <!-- Description and details --> */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">Welcome to the {product.name}! A video game masterpiece that is a must for your collection. {product.publisher}' proposal has been awarded a score of {Math.floor(product.relevance)}/100 by the critics. Play it on your favourite console in less than 24 hours thanks to our distributor {product.distributor.distributor_name}.</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Distributor: { }</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">

                  <li className="text-gray-400"><span className="text-gray-600">Name: {product.distributor.distributor_name}</span></li>


                  <li className="text-gray-400"><span className="text-gray-600">CIF: {product.distributor.CIF}</span></li>

                  <li className="text-gray-400"><span className="text-gray-600">Address: {product.distributor.address}</span></li>

                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div> : <div className="flex justify-center mt-10">
      <PacManLoader
        color="#76C2AF"
        size={50}
        speedMultiplier={1}
      />
      </div>}
  </>
};

export default Details;


  // return <>
  //   <button onClick={goBack}>&lt; Back</button>
  //   {Object.keys(product).length !== 0 ?
  //   <article>
  //   <h1>{product.name}</h1>
  //   <h2>Relevance: {product.relevance}/100</h2>
  //   <h2>Price: {product.price}€</h2>
  //   <h2>Distributor:</h2>
  //   <ul>
  //     <li>Company: {product.distributor.distributor}</li>
  //     <li>CIF: {product.distributor.CIF}</li>
  //     <li>Address: {product.distributor.address}</li>
  //   </ul>
  // </article> : <span>Loading...</span>
  // }
  // </>;