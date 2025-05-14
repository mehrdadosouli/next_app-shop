import Products from "@/components/Products/Products"
function Shopping({searchTerm}) {
  return (
    <div><Products searchTerm={searchTerm} /></div>
  )
}

export default Shopping