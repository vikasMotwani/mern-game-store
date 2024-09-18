import React, {useState } from "react";
import {Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import NavCart from './NavCart'


const Nav = () => {
  const itemsQuantity = useSelector(state => state.numberItems)
  const [open, setOpen] = useState(false)


return <div className="flex items-center">
<Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/" >Store</Link>


  <button onClick={() => setOpen(true)}
    type="button"
    className="group -mr-1 flex items-center text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
  >
    <span className="sr-only">Open Cart</span>
    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
    <span className="ml-1 font-medium mx-1">{itemsQuantity}</span>
  </button>
<NavCart open={open} setOpen={setOpen} />
</div>
};

export default Nav;





/* 

import React from "react";
import {Link } from "react-router-dom"
import { useSelector } from 'react-redux';


Version 1:

const Nav = () => {

  const itemsQuantity = useSelector(state => state.numberItems)
  return <div >
    <Link to="/" >Home</Link>
    <Link to="/cart" >Cart</Link>
    <span>{itemsQuantity}</span>

    </div>;
};

export default Nav;
 */