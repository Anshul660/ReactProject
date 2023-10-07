import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom'
import { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity } from "../redux/bazarSlice";
const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
const dispatch=useDispatch();


const [details, setDetails] = useState({});
let [baseQty, setBaseQty] = useState(1);


  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose onClick={()=>dispatch(deleteItem(item.id))}className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300" />
              <img
                className="w-32 object-cover"
                src={item.image}
                alt="product image"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>

{/* INCREASE QUANTITY AND DECREASE QUANTITY BUTTONS */}

        <div className="flex gap-4">
            <div className=" w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    dispatch(decrementQuantity({id: item.id}))
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center  px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity({id: item.id}))}
                  className="border h-5 font-normal text-lg flex items-center justify-center  px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
   
          </div>
           <p className="w-14">${item.quantity * item.price}</p>


          </div>
        ))}
      </div>
<button onClick={()=>dispatch(resetCart())} className="bg-red-500 text-white mt-8 ml-7 px-6 hover:bg-red-800 duration-300">
  Reset Cart
</button>
<Link to="/">
<button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
      
              <span>
                <HiArrowLeft />{" "}
              </span>
              go shopping
            </button>
            </Link>
    </div>
  );
};

export default CartItem;

