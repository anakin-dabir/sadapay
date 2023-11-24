import React, {useEffect, useState} from 'react';
import BackBtn from '../components/BackBtn';
import DetailPage from './DetailPage';
import useStore from '../Store';

const SendPage = () => {
  const _balance = useStore(state => state._balance);
  const _pageState = useStore(state => state._pageState);
  const _setPageState = useStore(state => state._setPageState);
  const _setMoney = useStore(state => state._setMoney);
  const _setBalance = useStore(state => state._setBalance);
  const _setHomepageHistory = useStore(state => state._setHomepageHistory);
  const _generateRandomNumber = useStore(state => state._generateRandomNumber);
  const _setTime = useStore(state => state._setTime);

  const [state, setState] = useState('');
  const handleClick = e => {
    if (e.currentTarget.value !== '-1') {
      if (state.length === 0 && e.currentTarget.value === '0') {
        console.log('hi');
        return;
      }
      setState(pre => pre + e.target.value);
    } else {
      if (state.length !== 0) {
        setState(prev => prev.slice(0, -1));
      }
    }
  };

  return _pageState === 'SendPage' ? (
    <>
      <div className='bg-primary h-screen flex justify-between max-w-[460px] mx-auto relative p-4 flex-col w-screen !overflow-hidden'>
        <BackBtn name='HomePage' />
        <div className='flex items-center flex-col'>
          <div className='text-white/70 text-sm'>Current Balance</div>
          <div className='text-white text-sm font-semibold'>Rs. {_balance}</div>
        </div>

        <div className='text-white box-center text-6xl font-bold'>
          Rs. {state.length === 0 ? '0' : state}
        </div>
        <div className='flex flex-col gap-1'>
          <div className='box-center'>
            <div className='grid grid-cols-3 grid-rows-4 gap-x-3 text-white text-3xl'>
              <button
                onClick={handleClick}
                value={1}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                1
              </button>
              <button
                onClick={handleClick}
                value={2}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                2
              </button>
              <button
                onClick={handleClick}
                value={3}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                3
              </button>

              <button
                onClick={handleClick}
                value={4}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                4
              </button>
              <button
                onClick={handleClick}
                value={5}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                5
              </button>
              <button
                onClick={handleClick}
                value={6}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                6
              </button>

              <button
                onClick={handleClick}
                value={7}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                7
              </button>
              <button
                onClick={handleClick}
                value={8}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                8
              </button>
              <button
                onClick={handleClick}
                value={9}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                9
              </button>

              <button className=' rounded-full box-center  h-20 w-20 font-bold'></button>
              <button
                onClick={handleClick}
                value={0}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                0
              </button>
              <button
                onClick={handleClick}
                value={-1}
                className=' rounded-full box-center  h-20 w-20 font-bold'
              >
                <svg
                  viewBox='0 0 24 24'
                  className='h-7'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path
                      d='M11.7071 15.2938C11.3166 14.9033 11.3166 14.2701 11.7071 13.8796L13.5839 12.0027L11.7079 10.1267C11.3174 9.73617 11.3174 9.103 11.7079 8.71248C12.0984 8.32195 12.7316 8.32195 13.1221 8.71248L14.9982 10.5885L16.8796 8.70702C17.2702 8.3165 17.9033 8.3165 18.2938 8.70702C18.6844 9.09755 18.6844 9.73071 18.2938 10.1212L16.4124 12.0027L18.293 13.8833C18.6835 14.2739 18.6835 14.907 18.293 15.2975C17.9025 15.6881 17.2693 15.6881 16.8788 15.2975L14.9982 13.4169L13.1213 15.2938C12.7308 15.6843 12.0976 15.6843 11.7071 15.2938Z'
                      fill='#ffff'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M5.6131 5.14653C6.18186 4.42266 7.05148 4 7.97206 4H20C21.6568 4 23 5.34315 23 7V17C23 18.6569 21.6568 20 20 20H7.97206C7.05148 20 6.18186 19.5773 5.6131 18.8535L1.68453 13.8535C0.829805 12.7656 0.829807 11.2344 1.68453 10.1465L5.6131 5.14653ZM7.97206 6C7.6652 6 7.37533 6.14089 7.18574 6.38218L3.25717 11.3822C2.97226 11.7448 2.97226 12.2552 3.25717 12.6178L7.18574 17.6178C7.37533 17.8591 7.6652 18 7.97206 18H20C20.5523 18 21 17.5523 21 17V7C21 6.44772 20.5523 6 20 6H7.97206Z'
                      fill='#ffff'
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div className='flex gap-2 mt-auto mb-3'>
            <button
              disabled={!state.length}
              onClick={() => {
                const newMoney = (Number(_balance) + Number(state)).toString();
                _setBalance(newMoney);
                const receiverDetails = {
                  to: 'Khalid Umar',
                  number: '03048085844',
                  bank: 'Sadapay',
                  time: _setTime(),
                  shortTime: _setTime(-1),
                  reference: _generateRandomNumber(),
                  type: 'received',
                  money: state,
                };
                _setHomepageHistory(receiverDetails);
                _setPageState('HomePage');
              }}
              className={`h-16 w-1/2 disabled:bg-black/40 bg-black rounded-xl box-center text-white font-bold text-[17px]`}
            >
              Request
            </button>
            <button
              disabled={!state.length || Number(state) > Number(_balance)}
              onClick={() => {
                const newMoney = (Number(_balance) - Number(state)).toString();
                _setBalance(newMoney);
                _setMoney(state);
                _setPageState('DetailPage');
              }}
              className={`h-16 w-1/2 disabled:bg-black/40 bg-black rounded-xl box-center text-white font-bold text-[17px]`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <DetailPage />
  );
};

export default SendPage;
