import React, {useEffect} from 'react';
import BackBtn from '../components/BackBtn';
import {useNavigate, useParams} from 'react-router-dom';
import useStore from '../Store';

const HistoryPage = () => {
  const {data} = useParams();
  const navigate = useNavigate();
  const _user = useStore(state => state._user);
  const _homepageHistory = useStore(state => state._homepageHistory);

  return (
    <>
      <div className='bg-background  max-w-[460px] mx-auto h-screen !overflow-hidden relative w-screen flex flex-col'>
        <div className='bg-primary h-[55%] rounded-b-3xl p-3'>
          <BackBtn name='HomePage' onTouchStart={() => navigate(-1)} />
          <div className='h-full flex flex-col justify-between'>
            <div className='justify-center text-white flex font-bold text-xl mt-1.5'>
              Money Sent
            </div>
            <div className='flex flex-col items-center gap-6 mb-3'>
              <div className='h-24 w-24 rounded-[2.2rem] box-center bg-background'>
                <img src='/ms.png' alt='ms' />
              </div>
              <div className='flex-flex-col text-center space-y-2'>
                <div className='text-4xl text-white font-bold'>
                  Rs. {_homepageHistory[data].money}
                </div>
                <div className='flex flex-col'>
                  <div>
                    <span className='text-white/80'>From</span>{' '}
                    <span className='text-white/90 font-semibold'>{_user.name}</span>
                  </div>
                  <div>
                    <span className='text-white/80'>to</span>{' '}
                    <span className='text-white/90 font-semibold'>
                      {_homepageHistory[data].to.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className='text-white/80 text-[18px]'>{_homepageHistory[data].date}</div>
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
                  <div>{_user.number}</div>
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <div className='text-black/60'>To</div>
                <div className='flex flex-col'>
                  <div>{_homepageHistory[data].bank}</div>
                  <div>{_homepageHistory[data].number}</div>
                </div>
              </div>
              <hr className='border-t border-t-black/20' />
              <div className='flex flex-col gap-1'>
                <div className='text-black/60'>Reference Number</div>
                <div className='flex flex-col'>
                  <div>{_homepageHistory[data].reference}</div>
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
