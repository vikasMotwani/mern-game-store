import React, { useContext, useState, useEffect, Fragment } from "react";
import { searchContext } from "../../../context/searchContext";
import axios from 'axios'
import List from './List'
import { ChevronLeftIcon, ChevronRightIcon, ArrowDownIcon, ArrowUpIcon, XMarkIcon } from '@heroicons/react/20/solid'
import noGame from '../../../assets/nogame.webp'
import PacManLoader from "react-spinners/PacmanLoader";



const Store = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [page, setPage] = useState(1)
  const [moreAhead, setMoreAhead] = useState(true)

  const { searchInput } = useContext(searchContext)

  useEffect(() => {
    const printProducts = async () => {
      setIsLoading(true)
      const res = await axios.get(`/api/products`, {
        params: {
          page: page,
          sortBy: sortBy ? sortBy : undefined,
          order: order ? order : undefined,
          search: search ? search : undefined
        }
      });
      const { products, hasMore } = res.data;
      products.map(product => product.image = product.image || noGame)
      setProducts(products);
      setIsLoading(false)
      hasMore ? setMoreAhead(true) : setMoreAhead(false)

    }
    printProducts()
  },
    [page, sortBy, order, search])

  useEffect(() => {
    setSearch(searchInput)
  }, [searchInput])


  const orderByRule = (rule) => {
    if (sortBy !== rule) {
      setSortBy(rule)
      setOrder('asc')
      if (page !== 1) {
        setPage(1)
      }
    } else {
      order === 'asc' ? setOrder('des') : setOrder('asc')
    }
  }

  const removeRules = () => {
    setSortBy('')
    setOrder('')
    setPage(1)
  }

  const goNext = () => {
    setPage(page + 1)
    window.scrollTo(0, 0);

  }
  const goBack = () => {
    if (page !== 1) {
      setPage(page - 1)
      window.scrollTo(0, 0);
    }
  }
  const [buttons, setButtons] = useState({
    name: { text: "Sort by name", classInfo: "bg-gray-800", cross: false, arrow: "" },
    price: { text: "Sort by price", classInfo: "bg-gray-800", cross: false, arrow: "" },
    relevance: { text: "Sort by relevance", classInfo: "bg-gray-800", cross: false, arrow: "" }
  })

  useEffect(() => {
    const handleButtonContent = () => {
      const newButtons = { ...buttons }
      Object.keys(newButtons).forEach(key => {
        if (key === sortBy) {
          newButtons[key].classInfo = "bg-green-500"
          newButtons[key].arrow = order === "asc" ? <ArrowDownIcon className="w-6 h-6 ml-2" /> : <ArrowUpIcon className="w-6 h-6 ml-2" />;
          newButtons[key].cross = true;
        } else {
          newButtons[key].classInfo = "bg-gray-800"
          newButtons[key].arrow = ""
          newButtons[key].cross = false;
        }
      })
      setButtons(newButtons)
    }
    handleButtonContent()
    // eslint-disable-next-line
  }, [sortBy, order])


  return <>
      
        <div className="flex justify-center mt-3">
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {page === 1 ? <></> : <button onClick={goBack} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>}
            {page === 1 && !moreAhead ? <></> : <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">{page}</span>}
            {moreAhead ? <button onClick={goNext} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button> : <></>}
          </nav>
        </div>
        <div className="flex flex-col sm:flex-row mt-3 mx-4 justify-center">
          <button disabled={products.length < 2 ? true : false} className={`inline-flex items-center justify-center ${buttons.name.classInfo}  text-white py-2 px-4 mt-3 mx-4 rounded ${products.length < 2 ? "disabled: opacity-50 cursor-not-allowed" : ""}`} onClick={() => orderByRule('name')} >{buttons.name.cross === true ? <XMarkIcon className="w-6 h-6 mr-2" onClick={removeRules} /> : <></>}{buttons.name.text}{buttons.name.arrow}</button>
          <button disabled={products.length < 2 ? true : false} className={`inline-flex items-center justify-center ${buttons.relevance.classInfo} text-white py-2 px-4 mt-3 mx-4 rounded ${products.length < 2 ? "disabled: opacity-50 cursor-not-allowed" : ""}`} onClick={() => orderByRule('relevance')}>{buttons.relevance.cross === true ? <XMarkIcon className="w-6 h-6 mr-2" onClick={removeRules} /> : <></>}<span>{buttons.relevance.text}</span>{buttons.relevance.arrow}</button>
          <button disabled={products.length < 2 ? true : false} className={`inline-flex items-center justify-center ${buttons.price.classInfo} text-white py-2 px-4 mt-3 mx-4 rounded ${products.length < 2 ? "disabled: opacity-50 cursor-not-allowed" : ""}`} onClick={() => orderByRule('price')}>{buttons.price.cross === true ? <XMarkIcon className="w-6 h-6 mr-2" onClick={removeRules} /> : <></>}{buttons.price.text}{buttons.price.arrow}</button>
        </div>
    {!isLoading ? <>
        <List products={products} />
        <div className="flex justify-center">
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {page === 1 ? <></> : <button onClick={goBack} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>}
            {page === 1 && !moreAhead ? <></> : <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">{page}</span>}
            {moreAhead ? <button onClick={goNext} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button> : <></>}
          </nav>
        </div>
      </> : <div className="flex justify-center mt-40">
        <PacManLoader
          color="#76C2AF"
          size={60}
          speedMultiplier={1}
        />
      </div>
    }
  </>
};

export default Store;




//   Version 1:
//  return <>
//   {products.length > 1 ?
//   <>
//   <button className={buttons.name.classInfo} onClick={()=>orderByRule('name')} >{buttons.name.cross === true ? <span onClick={removeRules}> X </span> : <></>}{buttons.name.text}{buttons.name.arrow}</button>
//   <button className={buttons.relevance.classInfo} onClick={()=>orderByRule('relevance')}>{buttons.relevance.cross === true ? <span onClick={removeRules}> X </span> : <></>}{buttons.relevance.text}{buttons.relevance.arrow}</button>
//   <button className={buttons.price.classInfo} onClick={()=>orderByRule('price')}>{buttons.price.cross === true ? <span onClick={removeRules}> X </span> : <></>}{buttons.price.text}{buttons.price.arrow}</button>
//   {/* {sortBy.length > 0 ? <button onClick={removeRules}>No filters</button>:<></>} */}
//   </> :
//   <></>}
//   <List products={products} />
//   <div className="store-pagination">
//     {page === 1 ? <></> : <button onClick={goBack}>Previous</button>}
//     {page === 1 && !moreAhead ? <></> : <span>{page}</span>}
//     {moreAhead? <button onClick={goNext}>Next</button> : <></>}
//     </div>
// </>;