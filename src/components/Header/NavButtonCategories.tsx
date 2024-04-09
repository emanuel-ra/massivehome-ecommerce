import { isOpen } from '@/stores/categoriesNavBarMenu';
import { useStore } from '@nanostores/react';

interface Props {
    label:string
    className:string
}
export function NavButtonCategories(props:Props) {
  const { label, className } = props
  const $isOpen = useStore(isOpen);
  return (
    <button
      className={`${className} border-b-2 ${$isOpen ? 'border-slate-600' : 'border-transparent'}`}
      onClick={() => isOpen.set(!$isOpen)}
    >
      {label}
    </button>
  );
}
