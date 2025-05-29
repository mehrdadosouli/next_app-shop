'use client';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function EditProductModal({ product, onSave }) {
  const open = () => {
    MySwal.fire({
      title: <p>ویرایش محصول</p>,
      html: (
        <form id="edit-product-form" className="max-w-sm mx-auto text-right">
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1">
              عنوان
            </label>
            <input id="title" name="title" defaultValue={product.title} className="w-full border rounded p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-1">
              آدرس تصویر
            </label>
            <input id="image" name="image" defaultValue={product.image} className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-1">
              قیمت
            </label>
            <input id="price" name="price" type="number" defaultValue={product.price} className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">
              توضیحات
            </label>
            <textarea id="description" name="description" defaultValue={product.description} className="w-full border rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-1">
              دسته‌بندی
            </label>
            <select id="category" name="category" defaultValue={product.category} className="w-full border rounded p-2">
              <option value="لپ تاپ">لپ تاپ</option>
              <option value="موبایل">موبایل</option>
              <option value="تبلت">تبلت</option>
            </select>
          </div>
        </form>
      ),
      showCancelButton: true,
      confirmButtonText: 'ذخیره',
      cancelButtonText: 'انصراف',
      focusConfirm: false,
      preConfirm: () => {
        const form = document.getElementById('edit-product-form');
        const formData = new FormData(form);
        const image = formData.get('image').trim();
        const isValidSrc = !image || image.startsWith('http://') || image.startsWith('https://') || image.startsWith('/');

        if (!isValidSrc) {
          Swal.showValidationMessage('لطفاً یک آدرس تصویر معتبر وارد کنید یا خالی بگذارید.');
          return false;
        }
        return {
          title: formData.get('title'),
          image,
          price: Number(formData.get('price')),
          rating: Number(formData.get('rating')),
          description: formData.get('description'),
          category: formData.get('category'),
        };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const updatedData = result.value;

        try {
          const res = await fetch('/api/products', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: product._id, ...updatedData }),
          });

          if (!res.ok) throw new Error('خطا در ویرایش محصول');

          const data = await res.json();

          Swal.fire('موفق', 'محصول با موفقیت ویرایش شد', 'success');

          if (onSave) onSave(data.product);
        } catch (error) {
          Swal.fire('خطا', error.message, 'error');
        }
      }
    });
  };

  return (
    <button onClick={open} className="text-blue-600 hover:underline" type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => editHandler(item)}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 hover:cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    </button>
  );
}
