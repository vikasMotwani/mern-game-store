import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { searchContext } from "../../../context/searchContext";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import logo from '../../../assets/logo.svg';
import { DebounceInput } from 'react-debounce-input';




const SearchBar = () => {

  const { setSearchInput } = useContext(searchContext)

  return <div className="flex items-center">
    <Link to="/">
      <img
        className="block h-8 w-auto mr-2"
        src={logo}
        alt="logo"
      />
    </Link>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        <label htmlFor="search" className="sr-only">Search</label>
      </div>


      <DebounceInput
        id="search"
        name="search"
        debounceTimeout={1000}
        onChange={event => setSearchInput(event.target.value)}
        className="block w-full bg-gray-900 text-white border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-400"
        placeholder="Search"
        type="search"
      />
    </div>
  </div>
};

export default SearchBar;















/* 
Version 1:

import React, { useContext, useState, useRef, useEffect } from "react";
import { searchContext } from "../../../context/searchContext";

const SearchBar = () => {
  const [productInput, setProductInput] = useState('')

  const {setSearchInput } = useContext(searchContext)

  const inputRef = useRef();
  useEffect(() => {
    setSearchInput(productInput)
    // eslint-disable-next-line
  }, [productInput])

  const handleSearch = () => setProductInput(inputRef.current.value)
  const removeSearch = () => {
    setProductInput('');
    inputRef.current.value = '';
  }

  return <div>
    <input type="text" ref={inputRef}/><input type="button" value="search" onClick={handleSearch}/>
    {productInput ? <button onClick={removeSearch}>X</button>:<></>}
  </div>;
};

export default SearchBar; */
