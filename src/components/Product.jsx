import React, { useContext }  from "react";
import { Link} from "react-router-dom";
import { AppContext } from "../App";
function Product({ image, name, price }) {

  const {cart,setCart } = useContext(AppContext)
  const addProduct=(product)=>{
    var myCart=cart;
    myCart.push(product);
    setCart(myCart);
  }       
  return (
    <div className="  sm:m-0 m-auto ">
        <div className="p-1 bg-gray-100 mt-5 rounded-sm w-64 h-80 ">
          <div className=" h-52 w-60 bg-gray-500 p-2 rounded-sm ml-1   transition duration-200 ease-in tranform hover:scale-105">
            <img src={image} alt="" className="h-48 w-56 " />
          </div>
          <p className="text-zinc-400 text-sm ml-1 w-60 mt-2">{name}</p>
          {/**less ten 10 words */}
          <div className="flex flex-row justify-between mt-2 pr-2  w-full">

          <p className="font-bold text-md ml-1">${price}</p>
          <button onClick={()=>addProduct({image:image,name:name,price:price})} className="w-20 bg-blue-500 text-white rounded-md  p-2 font-semibold text-xs
          ">Add to cart</button>
          </div>
          
        </div>
    </div>
  );
}

export default Product;