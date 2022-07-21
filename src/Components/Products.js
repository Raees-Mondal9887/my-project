import React from "react";

export default function Products(props) {


  
console.log(props)

  return (
    <div className="sm:mx-28 mx-2 my-14 flex">
      <div className=" w-64  mx-2 text-center pt-1">
        <h1 className="text-xl font-bold">{props.products.name}</h1>
      </div>
      <div className=" bg-orange-500  w-14 rounded-md text-center pt-1">
        <span className="font-bold text-white">${props.products.price}</span>
      </div>
      <div className="inline-flex rounded-md shadow-sm mx-10" role="group">
  <button type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-red-600 rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    -
  </button>
  <span type="button" className="py-2 px-4 text-sm font-medium text-gray-900 bg-yellow-600 border-t border-b border-gray-900">
    {props.products.quantity}
  </span>
  <button type="button" onClick={()=>{props.incrementQuantity(props.index)}} className="py-2 px-4 text-sm font-medium text-gray-900 bg-green-600 rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    +
  </button>
</div>
<div className="font-bold ml-10 pt-1">
{props.products.quantity*props.products.price}

</div>
    </div>
  );

}
