'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import Score from '../Score/Score';

function CardProduct({ data }) {
  let { addToCard } = useContext(CartContext);
  const isValidSrc=typeof data.image == "string" && (data.image.startsWith("http://") || data.image.startsWith("https://") || data.image.startsWith("/"))
  const [imgSrc, setImgSrc] = useState(isValidSrc? data.image : "/img.jpg");
  return (
    <div className="w-full flex flex-col justify-between  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`shopping/${data._id}`} className="mx-auto">
        <Image className="p-8 rounded-t-lg object-cover" src={imgSrc} width={200} height={150} alt={data.title || "product image"} />
      </Link>
      <div className="px-5 pb-5">
        <Link href={`shopping/${data._id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        </Link>
        <Score rating={data.rating}/>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{data.price.toLocaleString('fa-IR') + ' تومان'}</span>
          <button
            onClick={() => addToCard(data)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
