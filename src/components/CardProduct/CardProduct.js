'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import Score from '../Score/Score';

function CardProduct({ data }) {
  console.log(data);

  let { addToCard } = useContext(CartContext);
  const isValidSrc = typeof data.image == 'string' && (data.image.startsWith('http://') || data.image.startsWith('https://') || data.image.startsWith('/'))
  const [imgSrc, setImgSrc] = useState(isValidSrc ? data.image : null);
  return (
    <div className="w-full flex flex-col justify-between  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`shopping/${data._id}`} className="mx-auto">
        {imgSrc ? (
          <Image className="rounded-t-lg object-cover" src={imgSrc} width={500} height={100} alt={data.title} />
        ) : (
          <div className="w-24 h-24 text-gray-400 flex items-center justify-center rounded-t-lg bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13L17 13M7 13h10"
              />
            </svg>
          </div>
        )}
      </Link>
      <div className="px-5 pb-5">
        <Link href={`shopping/${data._id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        </Link>
        <Score rating={data.rating} />
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
