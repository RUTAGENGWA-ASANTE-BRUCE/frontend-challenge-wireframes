import React,{ useContext } from 'react'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AppContext } from "../App";
import '../App.css'
import CartSideBar from './CartSideBar'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Products from './Products'
export default function App(){
  const {activeMenu,setActiveMenu } = useContext(AppContext)

    return(
        <div className="App relative">
        <img src={"https://www.ptpackaging.com/wp-content/uploads/PrintexTransparentPacking-seotool-13414-TheImportanceOf-BlogBanner1.jpg"} class={"w-full h-52 object-cover"} />
        <h5 className=" text-center text-xl font-semibold my-10">Browse the catalogue</h5>
         <Products />
         <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                <TooltipComponent
                  content="Cart"
                  position="Top"
                >
                  <button
                    type="button"
                    onClick={() => setActiveMenu(true)}
                    className="text-3xl text-white p-3 rounded-full bg-black hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <AiOutlineShoppingCart />
                  </button>
    
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-[300px] fixed sidebar dark:bg-secondary-dark-bg bg-gray-200 top-0 right-0 ">
                  <CartSideBar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <CartSideBar />
                </div>
              )}
        </div>
    )
}