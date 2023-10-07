import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

//import { shree } from '../assets/index';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import  axios from "axios";

const Cart = () => {
  const productData = useSelector((state)=> state.bazar.productData);
  const userInfo =useSelector((state)=> state.bazar.userInfo);
 const [totalAmt,setTotalAmt]=useState("");
 const [payNow,setPayNow] =useState(false);
 useEffect(()=>{
  let price =0;
  productData.map((item)=>{
    price+=item.price*item.quantity; 
    return price;
  })
  setTotalAmt(price)
 },[productData])

 const handleCheckOut=()=>{
  if(userInfo){
setPayNow(true)
  }else{
    // need to meke Notification for please sign in to check out 
  }
 }
// server token code
const payment =async(token)=>{
  await axios.post("https//localhoast:8000/pay", {
amount:totalAmt*100,
token :token,
  });
}


  return (
    <div>
      {/* <img className="w-full h-60 object-cover" src={shree} alt="logoDark" /> */}

      <div className="max-w-screen-xl mx-auto py-20 flex">
        <div className="w-2/3">
          <CartItem/>
        </div>
        <div className="w-1/3 bg-[#faf7f7] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[lpx] border-b-gray-400 pb-6">
          
              <h2 className="text-2xl font-medium">cart totals</h2>
     <p className='flex items-center gap-4 text-base'>
      Subtotal{" "}
      <span className='font-titleFont font-bold text-lg'>${totalAmt}</span>
     </p>
<p className='flex items-start gap-4 text-base'>
  Shipping{" "}
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium ullam id?
  </span>
</p>
<p className='font-titleFont font-semibold flex justify-between mt-6'>
   Total <span className='text-xl font-bold'>${totalAmt}</span></p>
<button onClick={handleCheckOut} className='bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-100ms' >proceed to checkout
</button>
{
  payNow &&( 
  <div className='w-full mt-6 flex items-center justify-center'>
    <StripeCheckout
    stripeKey="pk_test_51Nwm04SEGEGPmsy3U1hy2e1kwGmJxUxaNk8d68y4edqZmlbe5K7yoSY7R12b0DQL2NSaYYDKoogFRP8gPVW0PHTC005l9knSN9"
    name="Ansh online store"
    amount ={totalAmt * 100}
    lable="pay Now"
    description={`Your Payment amount is $${totalAmt}`}
    token={payment}
    email={userInfo.email}
    />
  </div>
)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
