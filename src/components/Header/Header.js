"use client"
import Link from "next/link"
import Image from "next/image"
import img1 from "../../../public/img.jpg"
import { useEffect, useState } from "react"

function Header() {
    const [show, setShow] = useState(false)
    const clickHandler = (e) => {
        setShow(!show)
    }
    useEffect(() => {
        window.addEventListener('click',(e)=>{            
            if(e.target.tagName !== "A" && e.target.tagName !== "SPAN" && e.target.tagName != "IMG"){
                setShow(false)
            }
        })
    }, [])
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
            <div className="max-w-screen-xl flex flex-row-reverse flex-wrap items-center justify-between mx-auto p-4">
                <Link href="https://flowbite.com/" className="flex items-baseline">
                    <Image src="https://flowbite.com/docs/images/logo.svg" width={50} height={50} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </Link>
                <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button onClick={clickHandler} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <Image className="w-8 h-8 rounded-full" src={img1} width={50} height={50} alt="user photo" />
                    </button>
                    <div className={`z-50 ${show ? "" : "hidden"} absolute top-10 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown`}>
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">داشبورد</Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
                            </li>
                            <li>
                                <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">خروج از حساب کاربری</Link>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link href="/shopping" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">فروشگاه</Link>
                        </li>
                        <li>
                            <Link href="/basket" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">سبد خرید</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header