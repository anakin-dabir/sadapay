import React from 'react';
import {useNavigate} from 'react-router-dom';
import BackBtn from '../components/BackBtn';
import useStore from '../Store';

const LoadMoney = () => {
  const navigate = useNavigate();
  const _user = useStore(state => state._user);
  const backFunction = () => {
    navigate('/');
  };
  return (
    <>
      <div className='bg-background  max-w-[460px] mx-auto h-screen !overflow-hidden w-screen relative p-3 flex flex-col justify-between'>
        <BackBtn color='#000000' onClick={backFunction} />
        <div className='mt-16 flex flex-col'>
          <div className='text-3xl font-semibold'>Load Money</div>
          <div className='text-black/50 mt-2'>
            <span className='text-primary'>Rs. 378,100 </span>
            <span>incoming limit left this month</span>
          </div>
          <div className='mt-5 flex flex-col gap-2'>
            <div className='font-medium'>Receive local transfers</div>
            <div className='border border-gray-600/10 rounded-lg py-2 px-3.5 flex flex-col gap-1'>
              <div className='text-black/50 text-sm'>My SadaPay account number</div>
              <div>{_user.number}</div>
              <div className='text-primary flex items-center gap-3'>
                <svg
                  viewBox='0 0 256 256'
                  xmlns='http://www.w3.org/2000/svg'
                  className='fill-primary h-8 w-8'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path
                      d='M48.186 92.137c0-8.392 6.49-14.89 16.264-14.89s29.827-.225 29.827-.225-.306-6.99-.306-15.88c0-8.888 7.954-14.96 17.49-14.96 9.538 0 56.786.401 61.422.401 4.636 0 8.397 1.719 13.594 5.67 5.196 3.953 13.052 10.56 16.942 14.962 3.89 4.402 5.532 6.972 5.532 10.604 0 3.633 0 76.856-.06 85.34-.059 8.485-7.877 14.757-17.134 14.881-9.257.124-29.135.124-29.135.124s.466 6.275.466 15.15-8.106 15.811-17.317 16.056c-9.21.245-71.944-.49-80.884-.245-8.94.245-16.975-6.794-16.975-15.422s.274-93.175.274-101.566zm16.734 3.946l-1.152 92.853a3.96 3.96 0 0 0 3.958 4.012l73.913.22a3.865 3.865 0 0 0 3.91-3.978l-.218-8.892a1.988 1.988 0 0 0-2.046-1.953s-21.866.64-31.767.293c-9.902-.348-16.672-6.807-16.675-15.516-.003-8.709.003-69.142.003-69.142a1.989 1.989 0 0 0-2.007-1.993l-23.871.082a4.077 4.077 0 0 0-4.048 4.014zm106.508-35.258c-1.666-1.45-3.016-.84-3.016 1.372v17.255c0 1.106.894 2.007 1.997 2.013l20.868.101c2.204.011 2.641-1.156.976-2.606l-20.825-18.135zm-57.606.847a2.002 2.002 0 0 0-2.02 1.988l-.626 96.291a2.968 2.968 0 0 0 2.978 2.997l75.2-.186a2.054 2.054 0 0 0 2.044-2.012l1.268-62.421a1.951 1.951 0 0 0-1.96-2.004s-26.172.042-30.783.042c-4.611 0-7.535-2.222-7.535-6.482S152.3 63.92 152.3 63.92a2.033 2.033 0 0 0-2.015-2.018l-36.464-.23z'
                      fillRule='evenodd'
                    ></path>
                  </g>
                </svg>
                <div className='font-medium'>Copy</div>
              </div>
            </div>
          </div>
          <div className='mt-5 flex flex-col gap-2'>
            <div className='font-medium'>Receive international transfers</div>
            <div className='border border-gray-600/10 rounded-lg py-2 px-3.5 flex flex-col gap-1'>
              <div className='text-black/50 text-sm'>My SadaPay IBAN number</div>
              <div>PK09 SADA 0000 0020 0092 1091</div>
              <div className='text-primary flex items-center gap-3'>
                <svg
                  viewBox='0 0 256 256'
                  xmlns='http://www.w3.org/2000/svg'
                  className='fill-primary h-8 w-8'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path
                      d='M48.186 92.137c0-8.392 6.49-14.89 16.264-14.89s29.827-.225 29.827-.225-.306-6.99-.306-15.88c0-8.888 7.954-14.96 17.49-14.96 9.538 0 56.786.401 61.422.401 4.636 0 8.397 1.719 13.594 5.67 5.196 3.953 13.052 10.56 16.942 14.962 3.89 4.402 5.532 6.972 5.532 10.604 0 3.633 0 76.856-.06 85.34-.059 8.485-7.877 14.757-17.134 14.881-9.257.124-29.135.124-29.135.124s.466 6.275.466 15.15-8.106 15.811-17.317 16.056c-9.21.245-71.944-.49-80.884-.245-8.94.245-16.975-6.794-16.975-15.422s.274-93.175.274-101.566zm16.734 3.946l-1.152 92.853a3.96 3.96 0 0 0 3.958 4.012l73.913.22a3.865 3.865 0 0 0 3.91-3.978l-.218-8.892a1.988 1.988 0 0 0-2.046-1.953s-21.866.64-31.767.293c-9.902-.348-16.672-6.807-16.675-15.516-.003-8.709.003-69.142.003-69.142a1.989 1.989 0 0 0-2.007-1.993l-23.871.082a4.077 4.077 0 0 0-4.048 4.014zm106.508-35.258c-1.666-1.45-3.016-.84-3.016 1.372v17.255c0 1.106.894 2.007 1.997 2.013l20.868.101c2.204.011 2.641-1.156.976-2.606l-20.825-18.135zm-57.606.847a2.002 2.002 0 0 0-2.02 1.988l-.626 96.291a2.968 2.968 0 0 0 2.978 2.997l75.2-.186a2.054 2.054 0 0 0 2.044-2.012l1.268-62.421a1.951 1.951 0 0 0-1.96-2.004s-26.172.042-30.783.042c-4.611 0-7.535-2.222-7.535-6.482S152.3 63.92 152.3 63.92a2.033 2.033 0 0 0-2.015-2.018l-36.464-.23z'
                      fillRule='evenodd'
                    ></path>
                  </g>
                </svg>
                <div className='font-medium'>Copy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadMoney;
