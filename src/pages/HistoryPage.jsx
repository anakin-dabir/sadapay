import React from 'react';
import BackBtn from '../components/BackBtn';
import {Helmet} from 'react-helmet';

const HistoryPage = ({setPageState}) => {
  return (
    <>
      <Helmet>
        <meta name='theme-color' content='#FF7B66' />
      </Helmet>
      <div className='bg-background  max-w-[460px] mx-auto h-screen !overflow-hidden relative w-screen flex flex-col'>
        <div className='bg-primary h-[55%] rounded-b-3xl p-3'>
          <BackBtn name='SendPage' setPageState={setPageState} />
          <div className='h-full flex flex-col justify-between'>
            <div className='justify-center text-white flex font-bold text-xl mt-1.5'>
              Money Sent
            </div>
            <div className='flex flex-col items-center gap-6 mb-3'>
              <div className='h-24 w-24 rounded-[2.2rem] box-center bg-background'>
                <img src='/ms.png' alt='ms' />
              </div>
              <div className='flex-flex-col text-center space-y-2'>
                <div className='text-4xl text-white font-bold'>Rs. 180</div>
                <div className='flex flex-col'>
                  <div>
                    <span className='text-white/80'>From</span>{' '}
                    <span className='text-white/90 font-semibold'>Muhammad Talha Arshad</span>
                  </div>
                  <div>
                    <span className='text-white/80'>to</span>{' '}
                    <span className='text-white/90 font-semibold'>JAVED IQBAL -</span>
                  </div>
                </div>
                <div className='text-white/80 text-[18px]'>22 November 2023, 06:09 AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className='h-[40%] p-3 mt-4'>
          <div className='bg-white shadow-newShadow rounded-2xl p-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-1'>
                <div className='text-black/60'>From</div>
                <div className='flex flex-col'>
                  <div>SadaPay</div>
                  <div>3094998057</div>
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <div className='text-black/60'>To</div>
                <div className='flex flex-col'>
                  <div>Easypaisa</div>
                  <div>03094998057</div>
                </div>
              </div>
              <hr className='border-t border-t-black/20' />
              <div className='flex flex-col gap-1'>
                <div className='text-black/60'>Reference Number</div>
                <div className='flex flex-col'>
                  <div>1LINK-500584</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
