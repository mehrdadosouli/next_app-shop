'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useContext, useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { CartContext } from '@/app/contexts/CartContext';
import img1 from '../../../public/img.jpg';

function Header() {
  const pathname = usePathname();
  const { cart, addToCard, removeFromCard, minusFromCard, total } = useContext(CartContext);

  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleBasket = () => setIsOpenBasket((prev) => !prev);
  const toggleMenu = () => setIsOpenMenu((prev) => !prev);
  const toggleUserMenu = () => setShowUserMenu((prev) => !prev);

  // بستن منوی سبد خرید اگر کلیک بیرون از آن شد
  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.id == 'blur') {
        setIsOpenBasket(false);
      }
      if (!event.target.closest('#user-menu-button') && !event.target.closest('#user-dropdown')) {
        setShowUserMenu(false);
      }
    }

    if (isOpenBasket || showUserMenu) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpenBasket, showUserMenu]);

  return (
    <>
      <nav className="w-full bg-white border-gray-200 dark:bg-gray-900 md:static fixed top-0 left-0 right-0 mx-auto z-50 ">
        <div className="max-w-screen-xl flex flex-row-reverse flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center gap-3">
            {/* دکمه سبد خرید */}
            <button
              id="basket-button"
              onClick={toggleBasket}
              className="relative bg-green-100 p-1 rounded-full"
              aria-label="Toggle Basket"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="absolute top-1 -right-1 text-blue-800 font-bold bg-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
                {cart.length}
              </span>
            </button>

            {/* سبد خرید */}
            {isOpenBasket && (
              <div className="absolute top-16 left-0 md:min-w-[400px] max-w-[300px] max-h-[600px] overflow-auto rounded-lg flex flex-col gap-6 bg-gray-300 z-50 p-4">
                {cart.length ? (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="w-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-3"
                    >
                      <Link href={`shopping/${item.id}`}>
                        {typeof item.image === 'string' &&
                        (item.image.startsWith('http://') || item.image.startsWith('https://') || item.image.startsWith('/')) ? (
                          <Image className="rounded-t-lg object-cover" src={item.image} width={100} height={100} alt={item.title} />
                        ) : (
                          <div className="w-24 h-24 text-gray-400 flex items-center justify-center rounded-t-lg bg-gray-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-16 h-16"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
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
                      <div className="px-2 py-1">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                        <div className="flex items-center justify-between mt-2.5 mb-3">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white select-none">{item.price} $</span>
                          <div className="flex items-center gap-3">
                            {item.quantity > 1 ? (
                              <>
                                <button onClick={() => minusFromCard(item)} className="p-1 bg-gray-200 rounded">
                                  -
                                </button>
                                <span className="select-none">{item.quantity}</span>
                                <button onClick={() => addToCard(item)} className="p-1 bg-gray-200 rounded">
                                  +
                                </button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => removeFromCard(item)} className="p-1 bg-red-600 text-white rounded">
                                  حذف
                                </button>
                                <button onClick={() => addToCard(item)} className="p-1 bg-blue-700 text-white rounded">
                                  افزودن
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-4 text-gray-700 dark:text-gray-200">سبد خالی است</div>
                )}
                {cart.length > 0 && <div className="p-2 select-none font-bold text-right">جمع خرید : {total()} $</div>}
              </div>
            )}

            <div className="relative flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
              <button
                id="user-menu-button"
                onClick={toggleUserMenu}
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-600"
                aria-expanded={showUserMenu}
                aria-label="User menu"
              >
                <span className="sr-only">Open user menu</span>
                <Image className="w-8 h-8 rounded-full" src={img1} width={50} height={50} alt="user photo" />
              </button>

              {/* منوی کاربری */}
              <div
                id="user-dropdown"
                className={`z-50 absolute top-10 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 ${
                  showUserMenu ? '' : 'hidden'
                }`}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      داشبورد
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      خروج از حساب کاربری
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mehrdad</span>
          </div>

          {/* منوی کاربری */}

          {/* منوی اصلی */}
          <div
            className={`items-center justify-between ${
              !isOpenMenu && 'hidden'
            } w-[80%] md:flex md:w-[50%] md:static absolute top-10 left-0 right-0 mx-auto`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 ${
                    pathname === '/' ? 'text-white bg-blue-700 md:hover:text-blue-100' : 'text-gray-900'
                  } rounded-sm md:p-1 md:dark:text-blue-500`}
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/shopping"
                  className={`block py-2 px-3 ${
                    pathname === '/shopping' ? 'text-white  bg-blue-700 md:hover:text-blue-100' : 'text-gray-900'
                  } rounded-sm md:p-1 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  فروشگاه
                </Link>
              </li>
              <li>
                <Link
                  href="/basket"
                  className={`block py-2 px-3 ${
                    pathname === '/basket' ? 'text-white bg-blue-700 md:hover:text-blue-100' : 'text-gray-900'
                  } rounded-sm md:p-1 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  سبد خرید
                </Link>
              </li>
            </ul>
          </div>

          {/* دکمه منوی موبایل */}
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isOpenMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5zm0 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9zm0 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div id="blur" className={`w-full h-screen fixed top-0 left-0 bg-gray-400/25 z-20 ${!isOpenBasket ? 'hidden' : ''}`}></div>
    </>
  );
}

export default Header;
