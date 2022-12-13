import React, { useContext }  from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from "../App";
import { AiFillDelete, AiOutlineDotChart } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const CartSideBar = () => {
  const { activeMenu, setActiveMenu,cart,setCart } = useContext(AppContext)
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined) {
      setActiveMenu(false);

    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  const deleteProduct=(i)=>{
    var myCart=cart;
    myCart.splice(i,1);
    setCart(myCart);
  }       
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto  pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <button  onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-3xl  tracking-tight text-blacl">
              <span>Cart</span>
            </button>
            {/* <TooltipComponent content="Menu" position="BottomCenter"> */}
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rou  nded-full p-3 hover:bg-light-gray mt-4 block text-black"
              >
                <MdOutlineCancel />
              </button>
            {/* </TooltipComponent> */}
          </div>
          <div className="mt-10 space-y-3 w-full">
          {cart.length>0?(
            cart.map((item,i)=>(<div className="flex flex-row space-x-5 w-[300px]">
                <img src={item.image} className="w-16 h-16 rounded-md object-fit "/>
                <div className="flex flex-col space-y-2">
                    <p className="text-base w-40">{item.name}</p>
                    <div className="flex flex-row justify-between  w-[100px]"><p>Qty: 1</p> <p className="">${item.price}</p></div>
                </div>
                <button
                type="button"
                onClick={() => deleteProduct(i)}
                className="text-xl rounded-full p-3  hover:bg-light-gray mt-1 block "
              >
                <AiFillDelete className='text-3xl text-black' />
              </button>
            </div>))
          ):"There are no cart items"}
          </div>
        </>
      )}
    </div>
  );
};

export default CartSideBar;