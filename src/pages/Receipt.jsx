import React, {useEffect, useRef, useState} from 'react';
import Loader from '../components/Loader';
import useStore from '../Store';
import * as htmlToImage from 'html-to-image';

const Receipt = () => {
  const _pageState = useStore(state => state._pageState);
  const _setPageState = useStore(state => state._setPageState);
  const _user = useStore(state => state._user);
  const _senderDetails = useStore(state => state._senderDetails);
  const _setHomepageHistory = useStore(state => state._setHomepageHistory);
  const _generateRandomNumber = useStore(state => state._generateRandomNumber);
  const ref = useRef(null);

  const captureImage = async () => {
    const name = _generateRandomNumber();
    const dataUrl = await htmlToImage.toJpeg(ref.current, {quality: 0.95});
    var link = document.createElement('a');
    link.download = `${name}.jpeg`;
    link.href = dataUrl;
    link.click();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Shared Image',
          text: 'Check out this image!',
          url: dataUrl,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      console.log('Web Share API is not supported.');
      // Detect platform and use platform-specific sharing approach
      if (navigator.userAgent.match(/Android/i)) {
        // Use Android intent URL scheme
        window.location.href = `intent:${encodeURIComponent(dataUrl)}#Intent;end`;
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        // Use iOS mailto URL scheme
        window.location.href = `mailto:?subject=Shared Image&body=Check out this image: ${dataUrl}`;
      } else {
        console.log('Sharing not supported on this platform.');
      }
    }
  };
  const [shadow, setShadow] = useState(true);

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
    <>
      <button
        id='exclude-btn1'
        onClick={captureImage}
        className='fixed right-4 top-4 z-10 h-8 box-center text-primary font-medium'
        Share
      >
        Share
      </button>
      <div className='bg-background max-w-[460px] mx-auto h-screen !overflow-hidden relative w-screen pt-2 pb-5 flex flex-col'>
        <div ref={ref} className='bg-background  pt-3 pb-8'>
          <div className='h-10 w-32 mx-auto'>
            <img src='/sadapay.png' alt='sadapay' />
          </div>

          <div
            className={`w-[90%] mt-16 rounded-3xl relative ${
              shadow ? 'shadow-anotherShadow' : 'shadow-newShadow'
            } mx-auto flex justify-center bg-white`}
          >
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
              <div className='font-medium text-center -space-y-2 px-4 mt-1 text-lg'>
                <span>{_user.name}</span>
                <span className='!font-normal text-black/80'> to </span>
                <span className='block'>{_senderDetails.to.toUpperCase()}</span>
              </div>
              <div className='flex flex-col gap-3 p-3 pt-3 pb-4'>
                <div className='flex flex-col gap-1'>
                  <div className='text-black/50 text-[15px]'>Date & Time (PKT)</div>
                  <div className=''>{"15 October 2024, 2:45 PM"}</div>
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
        </div>

        <button
          id='exclude-btn2'
          onClick={() => _setPageState('HomePage')}
          className={`h-14 mx-5 mb-2 mt-auto bg-primary flex px-5 !justify-between items-center rounded-xl box-center text-white font-bold text-lg`}
        >
          <div>Close</div>
          <div className='h-8 w-8'>
            <svg fill='#ffff' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path d='M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z'></path>{' '}
              </g>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default Receipt;
