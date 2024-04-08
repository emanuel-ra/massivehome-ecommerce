import { isOpen } from '@/stores/categoriesNavBarMenu';
import { useStore } from '@nanostores/react';
import { categories } from '../mooks/categories';

export function NavCategories() {
  const $isOpen = useStore(isOpen);
  return (
    <div
      className={`transition ease-in-out ${$isOpen ? 'absolute top w-full top-24 bg-white min-h-96 ' : 'hidden'} `}
    >
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        <div className='grid grid-cols-1 md:grid-cols-3 px-4 py-4 border-r'>
          {categories.map((category, index) => (
            <div className=''>
              <a href='#' className='font-semibold text-lg'>
                {category.name}
              </a>
              <div>
                <ul>
                  {category?.children?.map((child) => (
                    <li>
                      <a href='#'>{child.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col justify-center items-center gap-y-2'>
          <img
            src='./50OFF.webp'
            alt='hasta 50% OFF en productos seleccionados'
          />
          <span className='font-semibold text-slate-600'>
            HASTA 50% OFF EN SELECCIONADOS
          </span>
        </div>
      </div>
    </div>
  );
}
