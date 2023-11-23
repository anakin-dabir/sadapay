import React, {useEffect} from 'react';
import Loader from '../components/Loader';
import useStore from '../Store';

const Receipt = () => {
  const _pageState = useStore(state => state._pageState);
  const _setPageState = useStore(state => state._setPageState);
  const _user = useStore(state => state._user);
  const _senderDetails = useStore(state => state._senderDetails);
  const _setHomepageHistory = useStore(state => state._setHomepageHistory);

  useEffect(() => {
    const interval = setTimeout(() => {
      _setPageState('ReceiptPage');
      console.log(_senderDetails);
      _setHomepageHistory(_senderDetails);
    }, 2000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  return _pageState === 'Loading' ? (
    <Loader />
  ) : (
    <div
      id='canva'
      className='bg-background max-w-[460px] mx-auto h-screen !overflow-hidden relative w-screen px-3 py-4 flex flex-col'
    >
      <div className='h-10 w-32 mx-auto'>
        <img src='/sadapay.png' alt='sadapay' />
      </div>
      <button
        id='exclude-btn1'
        className='absolute right-4 h-8 box-center text-primary font-medium'
      >
        Share
      </button>
      <div className='w-[90%] mt-20 rounded-3xl relative shadow-newShadow mx-auto flex justify-center bg-white'>
        <div className='absolute -top-12 bg-primary h-24 w-24 rounded-full box-center p-5'>
          <svg
            viewBox='0 -0.5 25 25'
            fill='none'
            className='h-24 w-24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                d='M5.5 12.5L10.167 17L19.5 8'
                stroke='#ffff'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </g>
          </svg>
        </div>
        <div className='flex flex-col mt-[3rem] w-full px-3 pt-6 pb-2'>
          <div className='text-4xl self-center font-bold'>Rs. {_senderDetails.money}</div>
          <div className='font-medium text-center px-4 mt-1 text-lg'>
            <span>{_user.name}</span>
            <span className='!font-normal text-black/80'> to </span>
            <span className='block -mt-1'>{_senderDetails.to.toUpperCase()}</span>
          </div>
          <div className='flex flex-col gap-3 p-3 py-4'>
            <div className='flex flex-col gap-1'>
              <div className='text-black/50 text-[15px]'>Date & Time (PKT)</div>
              <div className=''>{_senderDetails.time}</div>
            </div>
            <div className='flex flex-col  gap-1'>
              <div className='text-black/50 text-[15px]'>Receiver's Account</div>
              <div className=''>
                {_senderDetails.bank} *{_senderDetails.number.slice(-4)}
              </div>
            </div>
            <div className='flex flex-col  gap-1'>
              <div className='text-black/50 text-[15px]'>Reference Number</div>
              <div className=''>{_senderDetails.reference}</div>
            </div>
          </div>
        </div>
      </div>

      <button
        id='exclude-btn2'
        onClick={() => _setPageState('HomePage')}
        className={`h-14 mt-auto bg-primary rounded-xl box-center text-white font-bold text-[17px]`}
      >
        Close
      </button>
    </div>
  );
};

export default Receipt;
