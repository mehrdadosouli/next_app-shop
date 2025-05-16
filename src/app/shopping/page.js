import Products from "@/components/Products/Products"
async function Shopping({searchParams}) {
  const params=await searchParams;
  
  return (
    <div><Products params={params} /></div>
  )
}

export default Shopping