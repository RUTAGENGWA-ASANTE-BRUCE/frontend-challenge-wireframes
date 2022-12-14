import React, { useEffect, useState } from "react";
import Product from "./Product";
import ProductLoader from "./ProductLoader";
import {BiSearch} from 'react-icons/bi'
function Products() {
  const [products,setProducts]= useState([])
  const [searchValue,setSearchValue]= useState()
  const search=(searchWord)=>{
    var myProducts=products .filter((one, i) => {
        return one["category"] == searchValue || one.title
              .toLocaleLowerCase()
              .includes(searchWord.toString().toLowerCase());

    setProducts(myProducts)
  })
}
  useEffect(() => {
      async function fetchData() {
      
        fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>{
    setProducts(data.products)
    console.log(data)
});
    }
    fetchData()
    
    },[])
  return products.length>0? (
    <div className="w-full flex flex-col justify-center items-center"
    >
    <div className="mb-10 border border-black outline-none flex flex-row justify-between rounded-md p-2 w-[50%] h-10 ">

    <input type="text" onChange={e=>{
        search(e.target.value)
        setSearchValue(text)
        console.log(text)
        }} className={"outline-none border-none w-[70%]"} placeholder="Search the products..."/>
        <BiSearch className="text-xl" />
    </div>
        <div 
      className={`gap-x-10  pb-4 flex flex-row flex-wrap px-10 w-[80%]  pt-1  mt-5  `}>
        
      {products.length>0? products.map((one) => (
        <Product
          image={one["images"][0]}
          name={one["title"]}
          price={one["price"]}
    />
      )):
      <h1 className="flex flex-row ml-3 h-56">
          No resultes found for: {searchValue}
        </h1>
            }
    </div>
      </div>
  ) : (
    <div
      className={`gap-8  pb-4 flex flex-row flex-wrap pl-5 pr-5 pt-1  mt-5 ml-2 bg-gray-100 `}
    >
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
    </div>
  );
}

export default Products;