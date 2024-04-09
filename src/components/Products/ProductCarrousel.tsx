import type { Product } from "@/interfaces/products";
import { useState } from "react";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from '../icons/ArrowRight';
import { ArrowsMaximize } from "../icons/ArrowsMaximize";

interface Props{
    data:Product
}


export function ProductCarrousel(props:Props) {
  const { data } = props;
  const { title, images } = data;
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  let translateX = `-${current * 33.5}%`;
  return (
    <div className='overflow-hidden relative w-1/2 h-auto '>
      <div
        className={`flex flex-row flex-nowrap items-center justify-center transition ease-out duration-300 border-sky-500 w-[300%] gap-x-1`}
        style={{
          transform: `translateX(${translateX})`,
        }}
      >
        {images?.map((image, index) => (
          <img
            src={image}
            alt={`${title}`}
            key={index}
            className=''
            style={{ width: 'calc(100%/3)' }}
          />
        ))}
      </div>
      <div className='absolute top-[50%] w-full flex justify-center '>
        <div className='w-[90%] flex justify-between'>
          <button
            onClick={previousSlide}
            className='bg-white/80 px-2 py-2 rounded-full'
          >
            <ArrowLeft className='size-6' />
          </button>
          <button
            onClick={nextSlide}
            className='bg-white/80 px-2 py-2 rounded-full'
          >
            <ArrowRight className='size-6' />
          </button>
        </div>
      </div>
      <div className='absolute bottom-10 w-full flex justify-end px-4'>
        <button className="bg-white/70 rounded">
          <ArrowsMaximize className='size-10' />
        </button>
      </div>
      <div className='flex justify-center py-2 gap-x-2'>
        {images?.map((image, index) => (
          <span
            className={`block size-4 rounded-full border cursor-pointer ${current === index ? 'bg-black/80' : 'bg-white'}`}
            onClick={() => {
              setCurrent(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
