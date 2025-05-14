import React from 'react'
import CardProduct from '../CardProduct/CardProduct'

async function Products({searchTerm}) {

  
    const response=await fetch("http://localhost:3000/api/products",{
      cache:"no-store"
    })
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