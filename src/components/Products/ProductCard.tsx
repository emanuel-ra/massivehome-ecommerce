import type { Product } from "@/interfaces/products";

interface Props {
  data: Product;
}

function ProductCard(props:Props) {
    const { data } = props
  return (
    <div className='flex flex-col items-center '>
      <a href={`/Producto/${data.id}`}>
        <img src={data.images[0]} alt={data.title} />
      </a>
      <span className='text-ellipsis'>{data.title}</span>
      <span className='font-semibold'>$ {data.price}</span>
    </div>
  );
}

export default ProductCard