import Image from "next/image";
import Link from "next/link";

async function CategoryProduct({params}) {
    const {categoryName}=params
    const res=await fetch(`/api/products`)
    .then(res=>res.json()) 
    
  return (
    <div>
    {
      res.map(item=>{       
          if(item.category.includes(categoryName.replace(/_/g," ")))
            {
              return <div key={item.id} className="w-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <Link href={`/shopping?category=${item.id}`}>
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
                </div>
              </div>
            </div>
            }
        })
    }</div>
  )
}

export default CategoryProduct
