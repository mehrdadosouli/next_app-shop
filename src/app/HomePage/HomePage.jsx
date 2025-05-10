import CardProduct from "@/components/CardProduct/CardProduct"



function HomePage() {
  return (
    <div className="flex gap-5">
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  )
}

export default HomePage