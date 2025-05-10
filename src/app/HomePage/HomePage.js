import Banner from "@/components/Banner/Banner";
import CardProduct from "@/components/CardProduct/CardProduct";

function HomePage() {
  return (
    <div>
        <Banner />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
}

export default HomePage;
