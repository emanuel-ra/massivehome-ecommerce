interface Props{
    className:string
}
export const ArrowLeft = (props: Props) => {
    const { className } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className={`${className}`}
      aria-label='Arrow left Icon'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l14 0' />
      <path d='M5 12l6 6' />
      <path d='M5 12l6 -6' />
    </svg>
  );
};
