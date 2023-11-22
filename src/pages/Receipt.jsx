import React, {useEffect} from 'react';
import Loader from '../components/Loader';
import html2canvas from 'html2canvas';

const Receipt = ({details, selectedPrice, pageState, setPageState}) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      setPageState('ReceiptPage');
    }, 2000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  const handleShare = async () => {
    const elementToCapture = document.getElementById('captureElement');

    const idsToExclude = ['exclude-btn1', 'exclude-btn2'];

    const elementsToExclude = idsToExclude.map(id => `#${id}`).join(',');
    const elementsToInclude = `#${elementToCapture.id} :not(${elementsToExclude})`;

    const canvas = await html2canvas(elementToCapture, {
      ignoreElements: element => (element.matches(elementsToExclude) ? true : false),
    });

    // Convert the canvas to a data URL
    const imageDataUrl = canvas.toDataURL('image/png');

    // Use the Web Share API to share the image
    if (navigator.share) {
      navigator
        .share({
          title: 'Shared Page',
          text: 'Check out this page!',
          files: [new File([dataURLtoBlob(imageDataUrl)], 'page.png', {type: 'image/png'})],
        })
        .then(() => console.log('Shared successfully'))
        .catch(error => console.error('Error sharing:', error));
    } else {
      alert('Web Share API not supported on this browser');
    }
  };

  // Convert data URL to Blob
  const dataURLtoBlob = dataURL => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  };

  function generateRandomNumber() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  const formatDate = () => {
    const date = new Date();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = 'AM';

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (hours >= 12) {
      period = 'PM';
      hours -= 12;
    }

    if (hours === 0) {
      hours = 12;
    }

    return `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}, ${hours}:${minutes} ${period}`;
  };
  return pageState === 'Loading' ? (
    <Loader />
  ) : (
    <div id='canva' className='bg-background h-screen relative w-screen px-3 py-4 flex flex-col'>
      <div className='h-10 w-32 mx-auto'>
        <img src='/sadapay.png' alt='sadapay' />
      </div>
      <button
        id='exclude-btn1'
        onClick={handleShare}
        className='absolute right-4 h-8 box-center text-primary font-medium'
      >
        Share
      </button>
      <div className='w-[90%] mt-20 rounded-3xl relative shadow-newShadow mx-auto flex justify-center bg-white'>
        <div className='absolute -top-12 bg-primary h-24 w-24 rounded-full box-center p-5'>
          <svg viewBox='0 -0.5 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                d='M5.5 12.5L10.167 17L19.5 8'
                stroke='#ffff'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </g>
          </svg>
        </div>
        <div className='flex flex-col mt-[3rem] w-full px-3 pt-6 pb-2'>
          <div className='text-3xl self-center font-bold'>Rs. {selectedPrice}</div>
          <div className='font-medium text-center px-4 mt-1 text-[16px]'>
            <span>Danish Masood</span>
            <span className='font-normal text-black/60'> to </span>
            <span className='block -mt-1'>{details.name.toUpperCase()}</span>
          </div>
          <div className='flex flex-col gap-3 p-3 py-4'>
            <div className='flex flex-col gap-1'>
              <div className='text-black/50 text-[15px]'>Date & Time (PKT)</div>
              <div className=''>{formatDate()}</div>
            </div>
            <div className='flex flex-col  gap-1'>
              <div className='text-black/50 text-[15px]'>Receiver's Account</div>
              <div className=''>
                {details.bank} *{details.number.slice(-4)}
              </div>
            </div>
            <div className='flex flex-col  gap-1'>
              <div className='text-black/50 text-[15px]'>Reference Number</div>
              <div className=''>1LINK-{generateRandomNumber()}</div>
            </div>
          </div>
        </div>
      </div>

      <button
        id='exclude-btn2'
        onClick={() => setPageState('HomePage')}
        className={`h-14 mt-auto mb-10 bg-primary rounded-xl box-center text-white font-bold text-[17px]`}
      >
        Close
      </button>
    </div>
  );
};

export default Receipt;
