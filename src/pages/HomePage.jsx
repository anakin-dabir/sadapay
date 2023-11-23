import SendPage from './SendPage';
import useStore from '../Store';

const HomePage = () => {
  const _balance = useStore(state => state._balance);
  const _homepageHistory = useStore(state => state._homepageHistory);
  const _pageState = useStore(state => state._pageState);
  const _setPageState = useStore(state => state._setPageState);

  return _pageState === 'HomePage' ? (
    <>
      <div className='flex-col p-4 max-w-[460px] mx-auto h-[38%] w-screen'>
        <div className='w-full h-full'>
          <div className='flex h-full gap-3'>
            <button className='bg-gradient-to-b  from-secondaryMedium to-secondary w-[59%]  rounded-xl'>
              <div className='flex h-full self-start justify-between flex-col p-4 pt-5'>
                <div className='flex flex-col items-start gap-1'>
                  <div className='text-[15px] text-background'>Current Balance</div>
                  <div className='text-3xl font-bold text-white'>Rs. {_balance}</div>
                </div>
                <div className='flex h-10 items-center justify-between'>
                  <div>
                    <img src='/mastercard.png' alt='mastercard' className='h-7' />
                  </div>
                  <div>
                    <svg
                      viewBox='0 0 24 24'
                      className='h-10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                      <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></g>
                      <g id='SVGRepo_iconCarrier'>
                        <path
                          d='M6 12H18M18 12L13 7M18 12L13 17'
                          stroke='#ffff'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            <div className='flex flex-col justify-between gap-3 w-[41%]'>
              <div className='bg-gradient-to-b from-accentMedium to-accent h-1/2 rounded-xl'>
                <div className='flex flex-col p-2 justify-between h-full'>
                  <svg
                    viewBox='0 0 24 24'
                    className='h-8 w-8 self-start'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M12 6V18M12 18L7 13M12 18L17 13'
                        stroke='#ffff'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </g>
                  </svg>
                  <div className='flex flex-col text-xl pl-2 pb-2 font-medium text-white'>
                    <div>Load</div>
                    <div className='-mt-[4px]'>Money</div>
                  </div>
                </div>
              </div>
              <button
                onTouchStart={() => _setPageState('SendPage')}
                className='bg-primaryMedium h-1/2 rounded-xl active:bg-primary'
              >
                <div className='flex flex-col p-2 justify-between h-full'>
                  <svg
                    viewBox='0 0 24 24'
                    className='h-8 w-8 self-end'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
                    <g id='SVGRepo_iconCarrier'>
                      <path
                        d='M7 17L17 7M17 7H8M17 7V16'
                        stroke='#ffff'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </g>
                  </svg>
                  <div className='flex flex-col text-xl pl-2 pb-2 font-medium text-white'>
                    <div>Send &</div>
                    <div className='-mt-[6px]'>Request</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white mt-4 max-w-[460px] mx-auto  rounded-3xl flex flex-col gap-7 p-5'>
        <div className='text-3xl font-medium'>Today</div>
        {_homepageHistory.map((data, i) => {
          return (
            <button key={i} className='flex flex-col items-stretch gap-1'>
              <div className='flex justify-between'>
                <div className='flex gap-3 items-center justify-center'>
                  <div className='rounded-2xl bg-primary/10 h-11 w-11 items-center justify-center'>
                    <img src='/ms.png' alt='ms' />
                  </div>
                  <div className='flex items-start flex-col'>
                    <div className='text-lg font-medium'>{data.to}</div>
                    <div className='text-black/50'>{data.shortTime}</div>
                  </div>
                </div>
                <div className='text-lg self-center font-medium'>- Rs. {data.money}</div>
              </div>
              <div className='hidden'>
                <img src='/icon.png' alt='i' />
                <img src='/sadapay.png' alt='i' />
                <img src='/logo.png' alt='i' />
              </div>
            </button>
          );
        })}
      </div>
    </>
  ) : (
    <SendPage />
  );
};

export default HomePage;
