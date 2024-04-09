import ProductCard from "@/components/Products/ProductCard";
import { products as items } from "@/mooks/products";


function ProductsGrid() {

    const products = items.slice(0, 12);
  return (
    <section className="w-full mt-10">
      <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-2 '>{products?.map(product => (
        <ProductCard data={product} />
      ))}</div>
    </section>
  );
}

export default ProductsGrid