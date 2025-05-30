'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import EditProductModal from '@/components/EditProductModal/EditProductModal';
import Score from '@/components/Score/Score';
import { ToastContainer, toast } from 'react-toastify';
function ProductsDashboard() {
  const notify = (txt) => toast(txt);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const editHandler = (item) => {
    setProducts((prev) => prev.map((p) => (p._id === item._id ? item : p)));
  };
  const deleteHandler = async (item) => {
    try {
      const res = await fetch('http://localhost:3000/api/products', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: item._id }),
      });

      if (res.ok) {
        const data = await res.json();
        notify('✅ محصول با موفقیت حذف شد');
        console.log('Deleted product:', data.product);
        setProducts((prev) => prev.filter((p) => p._id !== item._id));
        return data;
      } else {
        notify('⚠️ حذف محصول با خطا مواجه شد. لطفاً دوباره تلاش کنید.');
        console.error('خطا در حذف:', res.statusText);
      }
    } catch (error) {
      notify('❌ خطا در ارتباط با سرور!');
      console.error('DELETE error:', error);
    }
  };

  return (
    <div className="w-full mt-10">
      <ToastContainer />
      <div className="flex justify-end">
        <Link href="/dashboard/newproduct" className="bg-primary-300 p-2 m-2 rounded-xl">
          <button>Add New Product</button>
        </Link>
      </div>
      <table className="table-auto w-full border-b-2-collapse border border-gray-400">
        <thead className="border-b-2">
          <tr>
            <th>Edite</th>
            <th>Delete</th>
            <th>Score</th>
            <th>Product Name</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {products.map((item, index) => (
            <tr key={item._id}>
              <td className="border-b-2 px-2 py-6 ">
                <EditProductModal product={item} onSave={editHandler} />
              </td>
              <td className="border-b-2 px-2 py-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => deleteHandler(item)}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </td>
              <td className="border-b-2 px-2 py-1">
                <Score rating={item?.rating} />
              </td>
              <td className="border-b-2 px-2 py-1">{item.title.length > 10 ? item.title.slice(0, 50) + '...' : item.title}</td>
              <td className="border-b-2 px-2 py-1">{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsDashboard;
