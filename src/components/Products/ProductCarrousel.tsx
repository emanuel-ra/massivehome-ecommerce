import type { Product } from "@/interfaces/products";
import { useState } from "react";

interface Props{
    data:Product
}


export function ProductCarrousel(props:Props) {
    const {data} = props
    const { title, images} = data
    const [current,setCurrent] = useState<number>(0)

    const previousSlide = ()=>{
      if(current===0) setCurrent(images.length - 1);
      else setCurrent(current-1)
    }

    const nextSlide =  ()=>{
      if (current === images.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }

    let translateX = current === 0 ? '100%' : `-${current*655}px`; ; 

  return (
    <div className='overflow-hidden relative w-[500px] h-auto'>
      <div
        className={`flex justify-center transition ease-out duration-300`}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        {images?.map((image, index) => (
          <img src={image} alt={`${title}`} key={index} />
        ))}
      </div>
      <div className='flex justify-between'>
        <button onClick={previousSlide}> prev </button>
        <span>
          {current} - {current * 100}
        </span>
        <button onClick={nextSlide}> next </button>
      </div>
    </div>
  );
}
