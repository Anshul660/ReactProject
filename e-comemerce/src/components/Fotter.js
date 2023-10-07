import React from "react";
import { logoDark } from "../assets";
import { ImGithub } from "react-icons/im";
const Fotter = () => {
  return (
    <div className="bg-black text-white py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-5">
          <img className="w-32" src={logoDark} alt="logoDark" />
          <p className="text-white text-sm tracking-wide">@ anshul.com</p>
          <img
            className="w-56"
            src="https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png"
            alt="paymentlogo"
          />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="text-base flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <p>192,Karamveer nagar bhopal (M.P)</p>
          <p>Mobile: 0660 95840760</p>
          <p>Phonee: 0660 03840766</p>
          <p>e-Mail: anshullodhi660@gmail.com</p>
        </div>
        <div className="text-base flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2> 
          <div className="flex flex-col gap-2 text-base">  
            <p className="flex item-center gap-3 hover:text-white duration-300 cursor-pointer">my account</p>
            <p className="flex item-center gap-3 hover:text-white duration-300 cursor-pointer">checkout</p>
            <p className="flex item-center gap-3 hover:text-white duration-300 cursor-pointer">order tracking</p>
            <p className="flex item-center gap-3 hover:text-white duration-300 cursor-pointer">help & support</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input placeholder="e-mail" type="text"/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>      
  );
};

export default Fotter;
