import React, { useContext,useEffect,useState }  from 'react';
import AntDesignForm from './AntDesignForm'
export default function SignUp(){

    return (
        <div className="justify-center items-center bg-gray-100 min-h-screen w-full flex">

        <div className="flex flex-row  py-20 justify-center space-x-40 text-center rounded-md  bg-white  w-[80%]">
        <div className="flex flex-col space-y-5 w-fit">
            <h4 className="text-[40px] font-bold text-left">Sign up</h4>
            <AntDesignForm />
        </div>
        <div className="flex flex-col space-y-7">
            <img src="https://thumbs.dreamstime.com/b/woman-working-her-desk-computer-folders-part-office-workers-series-cartoon-characters-official-clothing-happy-85225646.jpg" className="w-96 h-96 obejct-cover " />
            <a className="underline cursor-pointer hover:text-blue-500">I am already member</a>

        </div>
        </div>
        </div>
    )
}