import React from "react";
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'

const List = (props) => {
  const printProducts = () => props.products.map(product => <Card product={product} key={uuidv4()}/>)

  return <section>

<div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{props.products.length > 0 ?"Results:" : "No products or distributors matched your search."}</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {printProducts()}          
        </div>
      </div>
    </div>
  </section>;
};

export default List;







// import React from "react";
// import Card from './Card'
// import { v4 as uuidv4 } from 'uuid'



// const List = (props) => {
//   const printProducts = () => props.products.map(product => <Card product={product} key={uuidv4()}/>)

//   return <section>
//     {printProducts()}

//   </section>;
// };

// export default List;
