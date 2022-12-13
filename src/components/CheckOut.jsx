import React, { useContext,useEffect,useState }  from 'react';
import { AppContext } from "../App";
export default function CheckOut(){
  const { activeMenu, setActiveMenu,cart,setCart,totalPrice } = useContext(AppContext)
  const [allPrice,setAllPrice]=useState(0);

    return (
        <div className="flex flex-row  py-20 justify-center space-x-40 text-center min-h-screen bg-gray-100 w-full">
        <div className="flex flex-col space-y-9">

            <h1 className="text-3xl text-left">Check out</h1>
            <h5 className="mt-3 text-xl text-left">Information</h5>
            <div className="flex flex-col space-y-3 ">

            <input className="w-96 h-16 bg-white outline none border-[0px]  border-black rounded-md p-2" placeholder="Name"/>
            <input className="w-96 h-16 bg-white outline none border-[0px]  border-black rounded-md p-2" placeholder="Email"/>
            <input className="w-96 h-16 bg-white outline none border-[0px]  border-black rounded-md p-2" placeholder="Address"/>
            </div>
            <button className="bg-blue-500 rounded-md text-white p-2 w-fit">Confirm & pay</button>
        </div>
        <div className=" space-y-3 ">
        <h5 className="text-xl text-left">Cart</h5>
          {cart.length>0?(
            cart.map((item,i)=>(<div className="flex flex-row space-x-5 w-[300px]">
                <img src={item.image} className="w-16 h-16 rounded-md object-fit "/>
                <div className="flex flex-col space-y-2">
                    <p className="text-base w-40 text-left">{item.name}</p>
                    <div className="flex flex-row justify-between  w-[100px]"><p>Qty: 1</p> <p className="">${item.price}</p></div>
                </div>
              
            </div>))
          ):"There are no cart items"}

        <h5 className="text-xl text-left">Total: ${totalPrice}</h5>
          </div>

        </div>
    )
}