import useStore from '../Store';

const BackBtn = ({color = '#ffff', name}) => {
  const _setPageState = useStore(state => state._setPageState);
  const backPage = () => {
    _setPageState(name);
  };
  return (
    <button onClick={backPage} className=' absolute -ml-[14px] w-10 h-10'>
      <svg viewBox='0 0 24 24' className='h-10' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            d='M15 7L10 12L15 17'
            stroke={color}
            strokeWidth='1'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </g>
      </svg>
    </button>
  );
};

export default BackBtn;
