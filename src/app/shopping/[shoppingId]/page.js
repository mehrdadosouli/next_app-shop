"use client";

import { CartContext } from "@/app/contexts/CartContext";
import {getProductDetails} from "../../../components/getProductDetails/getProductDetails";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext,use } from "react";
import Score from "@/components/Score/Score";
function ProductDetail({ params }) {
  const { addToCard } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const unwrappedParams = use(params);
  const { shoppingId } = unwrappedParams;
  
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await getProductDetails(shoppingId);
        setProduct(response);
      } catch (err) {
        console.error('Failed to fetch product', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [shoppingId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const { id, image, title, price, description, category, rating } = product;
  return (
    <div className="w-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/shopping/${id}`}>
        <Image
          className="p-8 rounded-t-lg object-cover"
          src={image}
          width={200}
          height={150}
          alt=""
        />
      </Link>
      <span className="p-4">
        <Link
          href={`/shopping?category=${category}`}
          className="hover:text-blue-400 dark:text-white"
        >
          {category}
        </Link>
        : category
      </span>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-1/2">{description}</h6>
        <Score rating={rating} />
        <div className="flex items-center justify-start gap-10">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
          <button
            onClick={() => addToCard(product)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;