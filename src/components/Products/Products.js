import React from 'react'
import CardProduct from '../CardProduct/CardProduct'

async function Products() {
    const response=await fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"> 
        {
            response.map(item=><CardProduct key={item.id} data={item}/>)
        }
    </div>
  )
}

export default Products