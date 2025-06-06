import React, { useState } from "react";
import { logoDark, cartImage, leftlogo } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Hader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b border-gray-800 font-titleFont sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="w-28" src={logoDark} alt="logoDark" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <Link to="/">
            <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/doc">
            <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] transition duration-300">
              About
            </li>
          </Link>
          <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] transition duration-300">
            Shop
          </li>
        </ul>

        {/* Cart & User */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImage} alt="Cart" />
              <span className="absolute top-2 left-0 w-6 text-sm flex items-center justify-center font-semibold text-orange-900">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/Login">
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo ? userInfo.image : leftlogo}
              alt="user"
            />
          </Link>
          {userInfo && (
            <p className="hidden md:block text-base font-bold text-black underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-black focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 px-4 py-3">
          <ul className="flex flex-col gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li className="font-semibold text-black">Home</li>
            </Link>
            <Link to="/doc" onClick={() => setMenuOpen(false)}>
              <li className="font-semibold text-black">About</li>
            </Link>
            <li className="font-semibold text-black">Shop</li>
            {userInfo && (
              <li className="text-black font-semibold">{userInfo.name}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hader;
