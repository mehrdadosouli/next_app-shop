'use client';
import { ToastContainer, toast } from 'react-toastify';

import { useActionState } from 'react';

function Newproduct() {
  const notify = (txt) => toast(txt);
  const [state, actionState, ispending] = useActionState(formHandler, {
    success: '',
    title: '',
    price: '',
    description: '',
  });
  async function formHandler(prevState, form) {
    const formData = Object.fromEntries(form.entries());
    if (!formData.title) {
      notify('لطفا اسم را وارد کنید');
      return;
    }
    if (!formData.price) {
      notify('لطفا عدد را وارد کنید');
      return;
    }
    if (!formData.description) {
      notify('لطفا توضیحات را وارد کنید');
      return;
    }
    if (formData.title && formData.price && formData.description) {
      try {
        const res = await fetch('http://localhost:3000/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          notify('محصول با موفقیت ثبت شد!');
        } else {
          notify('محصول نتوانست ثبت شود!');
        }
      } catch (error) {
        notify(error.message);
      }
    }
  }
  return (
    <div>
      <ToastContainer />
      <form className="max-w-sm mx-auto" action={actionState}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <textarea name="description" placeholder="description"></textarea>
          </div>
        </div>
        <div className="flex items-start mb-5">
          <select className="border rounded-lg" name="category">
            <option value="لپ تاپ">لپ تاپ</option>
            <option value="موبایل">موبایل</option>
            <option value="تبلت">تبلت</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={ispending}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 cursor-pointer focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {ispending ? 'در حال ارسال ...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Newproduct;
