import { isOpen } from '@/stores/categoriesNavBarMenu';
import { useStore } from '@nanostores/react';

interface Props {
    label:string
    class:string
}
export function NavButtonCategories(props:Props) {
    const { label, class } = props
 const $isOpen = useStore(isOpen);
  return (
    <button className={`${class}`}>
        {label}
    </button>
  )
}
