import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({products}) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[4px] bg-black"/>
        <p className="max-w-[700px] text-gray-600 text-center">
Explore Our Enchanting Blog: Dive into a World of Stories, Tips, and Inspiration! Discover What's Behind Our Products, Stay Informed, and Enhance Your Shopping Experience!</p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <div className="shadow-md hover:shadow-dark-green">
            <ProductsCard key={item.id} product={item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;