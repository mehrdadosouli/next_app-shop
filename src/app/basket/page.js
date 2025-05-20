"use client"
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

async function Basket() {
  let {cart, addToCard, removeFromCard, updateQuantity, total} =useContext(CartContext) 
  return (
    <div className="flex gap-10">
      <div className="w-1/2 flex flex-col gap-10">
      {
        cart.length ? 
        cart.map(item=>
          <div className="w-full flex flex-col justify-between  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href={`s/hopping/${item.id}`}>
              <Image
                className="p-8 rounded-t-lg object-cover"
                src={item.image}
                width={200}
                height={150}
                alt=""
              />
            </Link>
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-1/2">
                {item.title}
              </h6>
              <div className="flex items-center mt-2.5 mb-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                {item.title}
                </span>
              </div>
              <div className="flex items-center justify-start gap-10">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {item.price}
                </span>
                <button onClick={()=>addToCard(item)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Add to cart
                </button>
              </div>
            </div>
          </div>) :
          <div><h2>سبد خالی است</h2></div>
      }
      </div>
      <form className="w-1/2">
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Large input
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Default input
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Small input
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
}

export default Basket;
