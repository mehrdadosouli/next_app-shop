import Image from "next/image";
import Link from "next/link";

async function ProductDetail({ params }) {
  const { shoppingId } = params;
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  }).then((res) => res.json());

  let filterProduct = response.find((item) => item.id == shoppingId);
  let { id, image, title, price, description, category, rating } =filterProduct;
  let stars = 5;
  let totalStars =stars - (rating.rate > 2.5 ? Math.floor(rating.rate) : Math.ceil(rating.rate));
  
  return (
    <div className="w-full flex flex-col justify-between  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link href={`shopping/${id}`}>
        <Image
          className="p-8 rounded-t-lg object-cover "
          src={image}
          width={200}
          height={150}
          alt=""
        />
      </Link>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-w-1/2">
          {description}
        </h6>
        <div className="flex items-center mt-2.5 mb-5">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(totalStars)].map((star, index) => (
              <span key={index}>
                <svg
                  className="w-4 h-4 text-yellow-200 dark:text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </span>
            ))}

            {Array(stars - totalStars)
              .fill(0)
              .map((i, index) => (
                <span key={index}>
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </span>
              ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating.rate}
          </span>
        </div>
        <div className="flex items-center justify-start gap-10">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <Link
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
